const fs = require('fs');

const TARGET_DIR = 'stable';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

const checkpoints = [
    { ipynb: 'abyss_orange_mix_2_webui_colab', url: 'https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix2/Pruned/AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors', name: 'AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors' },
    { ipynb: 'abyssbasil_0_5_webui_colab', url: 'https://civitai.com/api/download/models/11182?type=Model&format=SafeTensor', name: 'AbyssBasil2.safetensors' },
    { ipynb: 'aniflatmix_webui_colab', url: 'https://civitai.com/api/download/models/29155?type=Model&format=SafeTensor', name: 'aniflatmixAnimeFlatColorStyle_v10.safetensors' },
    { ipynb: 'blueberrymix_webui_colab', url: 'https://huggingface.co/luizC/blueberry/resolve/main/blueberrymix_10.safetensors', name: 'blueberrymix_10.safetensors' },
    { ipynb: 'camellia_mix25d_webui_colab', url: 'https://huggingface.co/Powidl43/CamelliaMix/resolve/main/CamelliaMix_2.5D.safetensors', name: 'CamelliaMix_2.5D.safetensors' },
    { ipynb: 'chillout_mix_webui_colab', url: 'https://huggingface.co/swl-models/chilloutmix/resolve/main/Chilloutmix-non-ema-fp16.safetensors', name: 'Chilloutmix-non-ema-fp16.safetensors' },
    { ipynb: 'chillout_ni_mix_webui_colab', url: 'https://huggingface.co/swl-models/chilloutmix-ni/resolve/main/chilloutmix-Ni-non-ema-fp16.safetensors', name: 'chilloutmix-Ni-non-ema-fp16.safetensors' },
    { ipynb: 'chikmix_mix_webui_colab', url: 'https://huggingface.co/KSD2023/chikmix_V2/resolve/main/chikmix_V2.safetensors', name: 'chikmix_V2.safetensors' },
    { ipynb: 'counterfeit_webui_colab', url: 'https://huggingface.co/ckpt/Counterfeit-V2.0/resolve/main/Counterfeit-V2.0fp16.safetensors', name: 'Counterfeit-V2.0fp16.safetensors' },
    { ipynb: 'deliberate_webui_colab', url: 'https://huggingface.co/XpucT/Deliberate/resolve/main/Deliberate_v2.safetensors', name: 'Deliberate_v2.safetensors' },
    { ipynb: 'dreamshaper_webui_colab', url: 'https://huggingface.co/Lykon/DreamShaper/resolve/main/DreamShaper_4BakedVae_fp16.safetensors', name: 'DreamShaper_4BakedVae_fp16.safetensors' },
    { ipynb: 'expmix_line_webui_colab', url: 'https://huggingface.co/Dorshu/expmixLine_v20/resolve/main/expmixLine_v20.safetensors', name: 'expmixLine_v20.safetensors' },
];

async function copy_files() {

    let templateCode = fs.readFileSync(BASE_SRC, { encoding: 'utf8' });

    checkpoints.forEach((item) => {
        console.log(`${item.ipynb} 복사`);
        let code = templateCode;
        code = code.replaceAll('#template_checkpoint_default#', item.url);
        code = code.replaceAll('#template_checkpoint_default_name#', item.name);
        fs.writeFileSync(`../${TARGET_DIR}/${item.ipynb}.ipynb`, code);
    })

    return true;
}

(function () {
    try {
        copy_files();
    } catch (e) {
        console.error(e);
    }
})();
