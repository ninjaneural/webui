const fs = require('fs');

const TARGET_DIR = process.argv[2] ?? 'sdxl';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

const checkpoints = [
    {
        name: 'DreamShaper XL',
        type: '범용',
        model: 'https://civitai.com/models/112902/dreamshaper-xl10',
        ipynb: 'dreamshaper_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/121931?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'DreamShaper_XL_09Alpha.safetensors',
        bakedVAE: true,
    },
    {
        name: 'AnimeArtDiffusion XL',
        type: '2D',
        model: 'https://civitai.com/models/117259/anime-art-diffusion-xl',
        ipynb: 'anime_art_diffusion_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/127055?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'AnimeArtDiffusion_XL_Alpha2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'CounterfeitXL',
        type: '2D',
        model: 'https://civitai.com/models/118406/counterfeitxl',
        ipynb: 'counterfeit_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/128439?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'counterfeit_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'YamerMIX SDXL',
        type: '2.5D',
        model: 'https://civitai.com/models/84040/sdxl-unstable-diffusers-yamermix',
        ipynb: 'yamer_mix_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/133118?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'yamer_mix_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'SDVN6-RealXL(Detailface)',
        type: '실사',
        model: 'https://civitai.com/models/118114/sdvn6-realxl',
        ipynb: 'sdvn6_realxl_detail_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/134461?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'sdvn6_realxl_detail.safetensors',
        bakedVAE: true,
    },
    {
        name: 'SDVN6-RealXL(Beautyface)',
        type: '실사',
        model: 'https://civitai.com/models/118114/sdvn6-realxl',
        ipynb: 'sdvn6_realxl_beauty_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/130249?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'sdvn6_realxl_beauty.safetensors',
        bakedVAE: true,
    },
    {
        name: 'SDVN6-RealXL(Slimface)',
        type: '실사',
        model: 'https://civitai.com/models/118114/sdvn6-realxl',
        ipynb: 'sdvn6_realxl_slim_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/130265?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'sdvn6_realxl_slim.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DucHaiten-AIart-SDXL',
        type: '범용',
        model: 'https://civitai.com/models/118756/duchaiten-aiart-sdxl',
        ipynb: 'duchaiten_aiart_sdxl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/133646?type=Model&format=SafeTensor&size=pruned&fp=fp32',
        checkpoint_file: 'duchaiten_aiart_sdxl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ShikiAnimeXL',
        type: '2D',
        model: 'https://civitai.com/models/119163/shikianimexl',
        ipynb: 'shikianimexl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/129369?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'shikianimexl.safetensors',
        bakedVAE: false,
    },
    {
        name: 'DynaVision XL',
        type: '3D',
        model: 'https://civitai.com/models/122606/dynavision-xl-all-in-one-stylized-3d-sfw-and-nsfw-output-no-refiner-needed',
        ipynb: 'dynavision_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/133559?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'dynavision_xl.safetensors',
        bakedVAE: false,
    },
    {
        name: 'Copax Realistic XL',
        type: '복합',
        model: 'https://civitai.com/models/118111/copax-realistic-xl-sdxl10',
        ipynb: 'copax_realistic_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/133549?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'copax_realistic_xl.safetensors',
        bakedVAE: false,
    },
    {
        name: 'RunDiffusion XL',
        type: '실사',
        model: 'https://civitai.com/models/120964/rundiffusion-xl',
        ipynb: 'rundiffusion_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/131579?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'rundiffusion_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'StabilityAI XL 1.0',
        type: '복합',
        model: 'https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0',
        ipynb: 'stable_diffusion_xl_webui_colab',
        checkpoint: 'https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0_0.9vae.safetensors',
        checkpoint_file: 'sd_xl_base_1.0_0.9vae.safetensors',
        refine_checkpoint: 'https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0_0.9vae.safetensors',
        refine_checkpoint_file: 'sd_xl_refiner_1.0_0.9vae.safetensors',
        bakedVAE: true,
    },
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
        code = code.replaceAll('#template_refine_checkpoint_default#', item.refine_checkpoint ?? '');
        code = code.replaceAll('#template_refine_checkpoint_default_name#', item.refine_checkpoint_file ?? '');
        fs.writeFileSync(`../${TARGET_DIR}/${item.ipynb}.ipynb`, code);

        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/${TARGET_DIR}/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../${TARGET_DIR}/README.md`, readmeText);

    return true;
}

async function make_readme() {
    let readme = [];
    readme.push(`| WebUI                                                                                                                                                                                    | ComfyUI                                                                                                                                                                                                 | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    checkpoints.forEach((item) => {
        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/sdxl/${item.ipynb}.ipynb) | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/comfyui_sdxl/${item.ipynb}.ipynb)  | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
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
