const fs = require('fs');
const https = require('https');

const TARGET_DIR = process.argv[2] ?? 'stable';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

async function fetchModel() {
    return new Promise((resolve, reject)=>{
        // JSON 데이터를 가져올 URL
        const url = 'https://raw.githubusercontent.com/ninjaneural/webui/master/misc/checkpoints_sd15.json';

        // HTTP GET 요청 보내기
        https.get(url, (response) => {
            let data = '';

            // 데이터를 수신할 때마다 호출되는 콜백 함수
            response.on('data', (chunk) => {
                data += chunk;
            });

            // 데이터 수신이 완료되면 호출되는 콜백 함수
            response.on('end', () => {
                resolve(data);
            });
        }).on('error', (error) => {
            reject(error);
        });
    })
}

let checkpoints = [];

async function copy_files() {
    let templateCode = fs.readFileSync(BASE_SRC, { encoding: 'utf8' });
    let readme = [];
    readme.push(`| Colab                                                                                                                                                                                            | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    const list = checkpoints.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
    list.forEach((item) => {
        console.log(`${item.ipynb} 복사`);
        let code = templateCode;
        code = code.replaceAll('#template_checkpoint_default#', item.checkpoint);
        code = code.replaceAll('#template_checkpoint_default_name#', item.checkpoint_file);
        code = code.replaceAll('#template_notebook#', TARGET_DIR);
        fs.writeFileSync(`../${TARGET_DIR}/${item.ipynb}.ipynb`, code);

        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/${TARGET_DIR}/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../${TARGET_DIR}/README.md`, readmeText);

    return true;
}

async function make_readme() {
    let readme = [];
    readme.push(`| 3월버전(stable)                                                                                                                                                                                  | 설치버전(install)                                                                                                                                                                               | 최신(nightly)                                                                                                                                                                                        | Deforum전용                                                                                                                                                                                      | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    const list = checkpoints.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
    list.forEach((item) => {
        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/stable/${item.ipynb}.ipynb) | [![Open In Colab](https://raw.githubusercontent.com/neuralninja22/colab/master/icons/colab-badge-install.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install/${item.ipynb}.ipynb) | [![Open In Colab](https://raw.githubusercontent.com/neuralninja22/colab/master/icons/colab-badge-nightly.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/nightly/${item.ipynb}.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/deforum/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../COLAB.md`, readmeText);
    return true;
}

(async function () {
    try {
        const model = await fetchModel();
        checkpoints = JSON.parse(model);
        copy_files();
        make_readme();
    } catch (e) {
        console.error(e);
    }
})();
