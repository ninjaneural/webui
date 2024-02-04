const fs = require('fs');

const TARGET_DIR = process.argv[2] ?? 'sdxl';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

const checkpoints = [
    {
        name: 'Animagine XL',
        type: '2D',
        model: 'https://huggingface.co/cagliostrolab/animagine-xl-3.0',
        ipynb: 'animagine_xl_webui_colab',
        checkpoint: 'https://huggingface.co/cagliostrolab/animagine-xl-3.0/resolve/main/animagine-xl-3.0.safetensors',
        checkpoint_file: 'animagine-xl-3.0.safetensors',
        bakedVAE: true,
    },
    {
        name: 'OpenDalle',
        type: '범용',
        model: 'https://civitai.com/models/238116?modelVersionId=275681',
        ipynb: 'open_dalle_v11_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/275681',
        checkpoint_file: 'OpenDalle_v11.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DreamShaper XL',
        type: '범용',
        model: 'https://civitai.com/models/112902/dreamshaper-xl10',
        ipynb: 'dreamshaper_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/121931?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'DreamShaper_XL_10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DreamShaper XL Turbo',
        type: '범용',
        model: 'https://civitai.com/models/112902/dreamshaper-xl10',
        ipynb: 'dreamshaper_xl_turbo_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/251662',
        checkpoint_file: 'DreamShaper_XL_Turbo_10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'AlbedoBase XL',
        type: '범용',
        model: 'https://civitai.com/models/140737/albedobase-xl',
        ipynb: 'albedo_base_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/281176',
        checkpoint_file: 'AlbedoBase_XL_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Juggernaut XL',
        type: '범용',
        model: 'https://civitai.com/models/133005/juggernaut-xl',
        ipynb: 'juggernaut_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/288982?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'juggernaut_xl_v8.safetensors',
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
        name: 'WildCardX-XL',
        type: '범용',
        model: 'https://civitai.com/models/239561/wildcardx-xl',
        ipynb: 'wildcardx_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/308455',
        checkpoint_file: 'wildcardx_xl_v4.safetensors',
        bakedVAE: true,
    },
    {
        name: 'CounterfeitXL',
        type: '2D',
        model: 'https://civitai.com/models/118406/counterfeitxl',
        ipynb: 'counterfeit_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/146761?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'counterfeit_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'YamerMIX SDXL',
        type: '2.5D',
        model: 'https://civitai.com/models/84040/sdxl-unstable-diffusers-yamermix',
        ipynb: 'yamer_mix_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/276923',
        checkpoint_file: 'yamer_mix_xl_v11.safetensors',
        bakedVAE: true,
    },
    {
        name: 'NewRealityXL ',
        type: '실사',
        model: 'https://civitai.com/api/download/models/275491',
        ipynb: 'new_reality_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/276923',
        checkpoint_file: 'new_reality_xl_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DynaVision XL',
        type: '3D',
        model: 'https://civitai.com/models/122606/dynavision-xl-all-in-one-stylized-3d-sfw-and-nsfw-output-no-refiner-needed',
        ipynb: 'dynavision_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/297740',
        checkpoint_file: 'dynavision_xl_v061.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ProtoVision XL',
        type: '실사',
        model: 'https://civitai.com/models/125703/protovision-xl-high-fidelity-3d-photorealism-anime-hyperrealism-no-refiner-needed',
        ipynb: 'proto_vision_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/265938',
        checkpoint_file: 'proto_vision_xl_v66.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Copax TimeLessXL',
        type: '복합',
        model: 'https://civitai.com/models/118111/copax-timelessxl-sdxl10',
        ipynb: 'copax_time_less_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/293413',
        checkpoint_file: 'copax_time_less_xl_v9.safetensors',
        bakedVAE: true,
    },
    {
        name: 'LEOSAMs HelloWorld SDXL',
        type: '실사',
        model: 'https://civitai.com/models/43977/leosams-helloworld-sdxl-base-model',
        ipynb: 'leosams_helloworld_sdxl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/320950',
        checkpoint_file: 'leosams_helloworld_sdxl_v40.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DeepBlue XL',
        type: '2.5D',
        model: 'https://civitai.com/models/128397/deepblue-xl',
        ipynb: 'deepblue_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/323144',
        checkpoint_file: 'deepblue_xl_v150.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Artium',
        type: '2.5D',
        model: 'https://civitai.com/models/216439/artium',
        ipynb: 'artium_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/277071',
        checkpoint_file: 'artium_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Tamarin_XL',
        type: '범용',
        model: 'https://civitai.com/models/235746/tamarinxl',
        ipynb: 'tamarin_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/265836',
        checkpoint_file: 'tamarin_xl_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'RealCartoon XL',
        type: '복합',
        model: 'https://civitai.com/models/125907/realcartoon-xl',
        ipynb: 'real_cartoon_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/254091',
        checkpoint_file: 'realcartoon_xl_v6.safetensors',
        bakedVAE: true,
    },
    {
        name: 'XXMix_9realisticSDXL',
        type: '실사',
        model: 'https://civitai.com/models/124421/xxmix9realisticsdxl',
        ipynb: 'xxmix_9realistic_sdxl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/145282?type=Model&format=SafeTensor&size=full&fp=bf16',
        checkpoint_file: 'xxmix_9realistic_sdxl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Cherry Picker XL',
        type: '2.5D',
        model: 'https://civitai.com/models/125680/cherry-picker-xl',
        ipynb: 'cherry_picker_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/149660?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'cherry_picker_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'RealVisXL',
        type: '실사',
        model: 'https://civitai.com/models/139562/realvisxl-v30-turbo?modelVersionId=268861',
        ipynb: 'real_vis_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/268861',
        checkpoint_file: 'real_vis_xl_v30.safetensors',
        bakedVAE: true,
    },
    {
        name: 'SDVN7-NijiStyleXL',
        type: '2.5D',
        model: 'https://civitai.com/models/123307/sdvn7-nijistylexl',
        ipynb: 'sdvn6_niji_style_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/155870?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'sdvn6_niji_style_xl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DucHaiten-AIart-SDXL',
        type: '범용',
        model: 'https://civitai.com/models/118756/duchaiten-aiart-sdxl',
        ipynb: 'duchaiten_aiart_sdxl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/136754?type=Model&format=SafeTensor&size=full&fp=fp32',
        checkpoint_file: 'duchaiten_aiart_sdxl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Mysterious SDXL',
        type: '범용',
        model: 'https://civitai.com/models/118441/lah-mysterious-or-sdxl',
        ipynb: 'mysterious_sdxl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/149020?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'mysterious_sdxl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ShikiAnimeXL',
        type: '2D',
        model: 'https://civitai.com/models/119163/shikianimexl',
        ipynb: 'shikianimexl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/129369?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'shikianimexl.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Copax Realistic XL',
        type: '복합',
        model: 'https://civitai.com/models/118111/copax-realistic-xl-sdxl10',
        ipynb: 'copax_realistic_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/133549?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'copax_realistic_xl.safetensors',
        bakedVAE: true,
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
        name: 'ZavyChromaXL',
        type: '실사',
        model: 'https://civitai.com/models/119229/zavychromaxl',
        ipynb: 'zavychroma_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/320428',
        checkpoint_file: 'zavychroma_xl_v40.safetensors',
        bakedVAE: true,
    },
    {
        name: 'XL13 Asmodeus',
        type: '실사',
        model: 'https://civitai.com/models/134646/xl13-asmodeus-sfw-and-nsfw',
        ipynb: 'xl13_asmodeus_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/150490?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'xl13_asmodeus.safetensors',
        bakedVAE: true,
    },

    {
        name: 'Realistic Stock Photo',
        type: '실사',
        model: 'https://civitai.com/models/139565/realistic-stock-photo',
        ipynb: 'realistic_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/294470',
        checkpoint_file: 'realistic_stock_photo_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'animaPencil XL',
        type: '2D',
        model: 'https://civitai.com/models/261336/animapencil-xl',
        ipynb: 'anima_pencil_xl_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/323674',
        checkpoint_file: 'anima_pencil_xl_v150.safetensors',
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
    const list = checkpoints.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
    list.forEach((item) => {
        console.log(`${item.ipynb} 복사`);
        let code = templateCode;
        code = code.replaceAll('#template_checkpoint_default#', item.checkpoint);
        code = code.replaceAll('#template_checkpoint_default_name#', item.checkpoint_file);
        code = code.replaceAll('#template_refine_checkpoint_default#', item.refine_checkpoint ?? '');
        code = code.replaceAll('#template_refine_checkpoint_default_name#', item.refine_checkpoint_file ?? '');
        code = code.replaceAll('#template_notebook#', TARGET_DIR);
        fs.writeFileSync(`../${TARGET_DIR}/${item.ipynb}.ipynb`, code);

        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/${TARGET_DIR}/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../${TARGET_DIR}/README.md`, readmeText);

    return true;
}

async function make_readme2() {
    let readme = [];
    readme.push(`| 바로실행                                                                                                                                                                                        | 설치버전(install)                                                                                                                                                                                | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    const list = checkpoints.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
    list.forEach((item) => {
        readme.push(`| [![Open In Colab](https://raw.githubusercontent.com/neuralninja22/colab/master/icons/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/sdxl/${item.ipynb}.ipynb) | [![Open In Colab](https://raw.githubusercontent.com/neuralninja22/colab/master/icons/colab-badge-install.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install_sdxl/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../COLAB_SDXL_ALL.md`, readmeText);
    return true;
}


(function () {
    try {
        copy_files();
        make_readme2();
    } catch (e) {
        console.error(e);
    }
})();
