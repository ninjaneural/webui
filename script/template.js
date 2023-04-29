const fs = require('fs');

const TARGET_DIR = process.argv[2] ?? 'stable';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

const checkpoints = [
    {
        name: 'AbyssOrangeMix2',
        type: '2.5D',
        model: 'https://huggingface.co/WarriorMama777/OrangeMixs',
        ipynb: 'abyss_orange_mix_2_webui_colab',
        checkpoint: 'https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix2/Pruned/AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors',
        checkpoint_file: 'AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors',
        bakedVAE: true,
    },
    { name: 'AbyssBasil2', type: '2.5D', model: '', ipynb: 'abyssbasil_0_5_webui_colab', checkpoint: 'https://civitai.com/api/download/models/11182?type=Model&format=SafeTensor', checkpoint_file: 'AbyssBasil2.safetensors' },
    {
        name: 'Animeflatmix',
        type: '2D',
        model: 'https://civitai.com/models/24387/aniflatmix-anime-flat-color-style-mix',
        ipynb: 'aniflatmix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/29155?type=Model&format=SafeTensor',
        checkpoint_file: 'aniflatmixAnimeFlatColorStyle_v10.safetensors',
    },
    {
        name: 'blueberrymix',
        type: '실사',
        model: 'https://civitai.com/models/14323/blueberrymix',
        ipynb: 'blueberrymix_webui_colab',
        checkpoint: 'https://huggingface.co/luizC/blueberry/resolve/main/blueberrymix_10.safetensors',
        checkpoint_file: 'blueberrymix_10.safetensors',
    },
    {
        name: 'CamelliaMix',
        type: '2.5D',
        model: 'https://huggingface.co/Powidl43/CamelliaMix',
        ipynb: 'camellia_mix25d_webui_colab',
        checkpoint: 'https://huggingface.co/Powidl43/CamelliaMix/resolve/main/CamelliaMix_2.5D.safetensors',
        checkpoint_file: 'CamelliaMix_2.5D.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ChilloutMix',
        type: '실사',
        model: 'https://huggingface.co/swl-models/chilloutmix',
        ipynb: 'chillout_mix_webui_colab',
        checkpoint: 'https://huggingface.co/swl-models/chilloutmix/resolve/main/Chilloutmix-non-ema-fp16.safetensors',
        checkpoint_file: 'Chilloutmix-non-ema-fp16.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ChilloutMix-Ni',
        type: '실사',
        model: 'https://huggingface.co/swl-models/chilloutmix-ni',
        ipynb: 'chillout_ni_mix_webui_colab',
        checkpoint: 'https://huggingface.co/swl-models/chilloutmix-ni/resolve/main/chilloutmix-Ni-non-ema-fp16.safetensors',
        checkpoint_file: 'chilloutmix-Ni-non-ema-fp16.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ChilledRemix',
        type: '실사',
        model: 'https://huggingface.co/sazyou-roukaku/chilled_remix',
        ipynb: 'chilled_remix_webui_colab',
        checkpoint: 'https://huggingface.co/sazyou-roukaku/chilled_remix/resolve/main/chilled_remix_v1Fp16vae.safetensors',
        checkpoint_file: 'chilled_remix_v1Fp16vae.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Chikmix',
        type: '2.5D',
        model: 'https://civitai.com/models/9871/chikmix',
        ipynb: 'chikmix_mix_webui_colab',
        checkpoint: 'https://huggingface.co/KSD2023/chikmix_V2/resolve/main/chikmix_V2.safetensors',
        checkpoint_file: 'chikmix_V2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Counterfeit-V3.0',
        type: '2D',
        model: 'https://huggingface.co/gsdf/Counterfeit-V3.0',
        ipynb: 'counterfeit_webui_colab',
        checkpoint: 'https://huggingface.co/gsdf/Counterfeit-V3.0/resolve/main/Counterfeit-V3.0_fp16.safetensors',
        checkpoint_file: 'Counterfeit-V2.0fp16.safetensors',
    },
    {
        name: 'Deliberate',
        type: '실사+2.5D',
        model: 'https://huggingface.co/XpucT/Deliberate',
        ipynb: 'deliberate_webui_colab',
        checkpoint: 'https://huggingface.co/XpucT/Deliberate/resolve/main/Deliberate_v2.safetensors',
        checkpoint_file: 'Deliberate_v2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Dark Sushi Mix',
        type: '2D',
        model: 'https://civitai.com/models/24779/dark-sushi-mix-mix',
        ipynb: 'dark_sushi_mix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/56071?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'DarkSushiMix_colorful.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DreamShaper',
        type: '실사+2.5D',
        model: 'https://huggingface.co/Lykon/DreamShaper',
        ipynb: 'dreamshaper_webui_colab',
        checkpoint: 'https://huggingface.co/Lykon/DreamShaper/resolve/main/DreamShaper_4BakedVae_fp16.safetensors',
        checkpoint_file: 'DreamShaper_4BakedVae_fp16.safetensors',
        bakedVAE: true,
    },
    {
        name: 'expmixLine_v2',
        type: '2D',
        model: 'https://huggingface.co/AIARTCHAN/expmixLine_v2',
        ipynb: 'expmix_line_webui_colab',
        checkpoint: 'https://huggingface.co/Dorshu/expmixLine_v20/resolve/main/expmixLine_v20.safetensors',
        checkpoint_file: 'expmixLine_v20.safetensors',
    },
    {
        name: 'henmixreal_v1',
        type: '실사',
        model: 'https://civitai.com/models/20282/henmixreal',
        ipynb: 'henmix_v1_webui_colab',
        checkpoint: 'https://huggingface.co/naonovn/henmix/resolve/main/henmixReal_v10.safetensors',
        checkpoint_file: 'henmixReal_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX realistic',
        type: '실사',
        model: 'https://civitai.com/models/43331/majicmix-realistic',
        ipynb: 'majic_mix_realistic_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/55911?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_realistic_v4.safetensors',
        bakedVAE: true,
    },
    {
        name: 'endlessReality',
        type: '실사',
        model: 'https://civitai.com/models/25573/endlessreality',
        ipynb: 'endless_reality_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/38255?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'endlessReality_v11.safetensors',
        bakedVAE: true,
    },
    {
        name: 'GhostMix',
        type: '2.5D',
        model: 'https://civitai.com/models/36520/ghostmix',
        ipynb: 'ghostmix_webui_colab',
        checkpoint: 'https://huggingface.co/drnighthan/GhostMix/resolve/main/GhostMix-V1.1.safetensors',
        checkpoint_file: 'GhostMix-V1.1.safetensors',
        bakedVAE: true,
    },
    {
        name: 'LOFI',
        type: '실사',
        model: 'https://civitai.com/models/9052/lofi',
        ipynb: 'lofi_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/28882?type=Model&format=SafeTensor',
        checkpoint_file: 'lofi_V2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'MeinaMix',
        type: '2D',
        model: 'https://huggingface.co/Meina/MeinaMix',
        ipynb: 'meina_mix_webui_colab',
        checkpoint: 'https://huggingface.co/Meina/MeinaMix/resolve/main/Meina%20V8%20baked%20VAE.safetensors',
        checkpoint_file: 'MeinaV8bakedVAE.safetensors',
        bakedVAE: true,
    },
    {
        name: 'MeinaPastel',
        type: '2D',
        model: 'https://huggingface.co/Meina/MeinaPastel',
        ipynb: 'meina_pastel_webui_colab',
        checkpoint: 'https://huggingface.co/Meina/MeinaPastel/resolve/main/MeinaPastelV3%20-%20Without%20VAE.safetensors',
        checkpoint_file: 'MeinaPastelV3WithoutVAE.safetensors',
    },
    {
        name: 'mistoonanime',
        type: '2D',
        model: 'https://civitai.com/models/24149/mistoonanime',
        ipynb: 'mistoon_anime_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/28861?type=Model&format=SafeTensor',
        checkpoint_file: 'mistoonAnime.safetensors',
    },
    {
        name: 'mix-pro-v4',
        type: '2D',
        model: 'https://civitai.com/models/7241/mix-pro-v4',
        ipynb: 'mixpro_webui_colab',
        checkpoint: 'https://huggingface.co/AIARTCHAN/MIX-Pro-V4/resolve/main/MIX-Pro-V4-fp16.safetensors',
        checkpoint_file: 'mixProV4.safetensors',
        bakedVAE: true,
    },
    {
        name: 'old-fish',
        type: '2D',
        model: 'https://civitai.com/models/14978/old-fish',
        ipynb: 'oldfish_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/22052?type=Model&format=SafeTensor',
        checkpoint_file: 'OldFish_v11.safetensors',
    },
    {
        name: 'PerfectWorld_V1',
        type: '2.5D',
        model: 'https://huggingface.co/naonovn/PerfectWorldAom2hbasilmix',
        ipynb: 'perfectworld_webui_colab',
        checkpoint: 'https://huggingface.co/naonovn/PerfectWorldAom2hbasilmix/resolve/main/perfectWorld_perfectWorldBakedVAE.safetensors',
        checkpoint_file: 'perfectWorld_perfectWorldBakedVAE.safetensors',
        bakedVAE: true,
    },
    {
        name: 'RealDosmix',
        type: '2.5D',
        model: 'https://civitai.com/models/6925/realdosmix',
        ipynb: 'realdosmix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/8137?type=Model&format=SafeTensor',
        checkpoint_file: 'realdosmix.safetensors',
    },
    {
        name: 'realistic-vision',
        type: '실사',
        model: 'https://civitai.com/models/4201/realistic-vision-v13-fantasyai',
        ipynb: 'realistic_vision_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/6987?type=Model&format=SafeTensor',
        checkpoint_file: 'realisticVisionV13_v13.safetensors',
        bakedVAE: true,
    },
    {
        name: 'v08_v80',
        type: '2.5D',
        ipynb: 'v80_v80_webui_colab',
        model: 'https://civitai.com/models/18427/v08',
        checkpoint: 'https://civitai.com/api/download/models/24196?type=Model&format=SafeTensor',
        checkpoint_file: 'V80_V80.safetensors',
        bakedVAE: true,
    },
    { name: 'yorrrlmix', type: '2.5D', model: 'https://civitai.com/models/17938/yorrrlmix', ipynb: 'yorrrlmix_webui_colab', checkpoint: 'https://civitai.com/api/download/models/30528', checkpoint_file: 'yorrrlmix_v21.safetensors' },
];

async function copy_files() {
    let templateCode = fs.readFileSync(BASE_SRC, { encoding: 'utf8' });
    let readme = [];
    readme.push(`| Colab                                                                                                                                                                                            | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    checkpoints.forEach((item) => {
        console.log(`${item.ipynb} 복사`);
        let code = templateCode;
        code = code.replaceAll('#template_checkpoint_default#', item.checkpoint);
        code = code.replaceAll('#template_checkpoint_default_name#', item.checkpoint_file);
        fs.writeFileSync(`../${TARGET_DIR}/${item.ipynb}.ipynb`, code);

        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/${TARGET_DIR}/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../${TARGET_DIR}/README.md`, readmeText);

    return true;
}

async function make_readme() {
    let readme = [];
    readme.push(`| WebUI 3월버전(추천)                                                                                                                                                                               | WebUI 최신                                                                                                                                                                                        | UI-UX 최신                                                                                                                                                                                       | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    checkpoints.forEach((item) => {
        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/stable/${item.ipynb}.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/nightly/${item.ipynb}.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/uiux/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../COLAB.md`, readmeText);
    return true;
}

(function () {
    try {
        copy_files();
        make_readme();
    } catch (e) {
        console.error(e);
    }
})();
