const fs = require('fs');

const TARGET_DIR = process.argv[2] ?? 'stable';
const BASE_SRC = `../${TARGET_DIR}/template.ipynb`;

const checkpoints = [
    {
        name: 'Aurora',
        type: '범용',
        model: 'https://civitai.com/models/40199/aurora',
        ipynb: 'aurora_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/45601?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'aurora_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'AbyssOrangeMix2',
        type: '2.5D',
        model: 'https://huggingface.co/WarriorMama777/OrangeMixs',
        ipynb: 'abyss_orange_mix_2_webui_colab',
        checkpoint: 'https://huggingface.co/WarriorMama777/OrangeMixs/resolve/main/Models/AbyssOrangeMix2/Pruned/AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors',
        checkpoint_file: 'AbyssOrangeMix2_hard_pruned_fp16_with_VAE.safetensors',
        bakedVAE: true,
    },
    { name: 'AbyssBasil2', type: '2.5D', model: '#', ipynb: 'abyssbasil_0_5_webui_colab', checkpoint: 'https://civitai.com/api/download/models/11182?type=Model&format=SafeTensor', checkpoint_file: 'AbyssBasil2.safetensors' },
    {
        name: 'Animeflatmix',
        type: '2D',
        model: 'https://civitai.com/models/24387/aniflatmix-anime-flat-color-style-mix',
        ipynb: 'aniflatmix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/40816',
        checkpoint_file: 'aniflatmixAnimeFlatColorStyle_v20.safetensors',
    },
    {
        name: 'AbsoluteReality',
        type: '실사',
        model: 'https://civitai.com/models/81458/absolutereality',
        ipynb: 'absolutereality_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/132760?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'absolutereality_v18.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Aniverse',
        type: '3D',
        model: 'https://civitai.com/models/107842/aniverse',
        ipynb: 'aniverse_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/180845?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'Aniverse_v16.safetensors',
        bakedVAE: true,
    },
    {
        name: 'BlueberryMix',
        type: '실사',
        model: 'https://civitai.com/models/14323/blueberrymix',
        ipynb: 'blueberrymix_webui_colab',
        checkpoint: 'https://huggingface.co/luizC/blueberry/resolve/main/blueberrymix_10.safetensors',
        checkpoint_file: 'blueberrymix_10.safetensors',
    },
    {
        name: 'braBeautifulRealistic',
        type: '실사',
        model: 'https://civitai.com/models/25494/beautiful-realistic-asians',
        ipynb: 'bra_beautiful_realistic_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/177164',
        checkpoint_file: 'braBeautifulRealistic_brav7.safetensors',
        bakedVAE: true,
    },
    {
        name: 'BeautyFool',
        type: '2.5D',
        model: 'https://civitai.com/models/101888/beautyfool',
        ipynb: 'beautyfool_colab',
        checkpoint: 'https://civitai.com/api/download/models/215628',
        checkpoint_file: 'beautyfool_v30.safetensors',
    },
    {
        name: 'CamelliaMix',
        type: '2.5D',
        model: 'https://civitai.com/models/44219',
        ipynb: 'camellia_mix25d_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/161429',
        checkpoint_file: 'CamelliaMix_2.5D_v3.safetensors',
        bakedVAE: true,
    },
    {
        name: 'CarDos Animated',
        type: '2.5D',
        model: 'https://civitai.com/models/22220/cardos-animated',
        ipynb: 'cardos_animated_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/101966',
        checkpoint_file: 'cardosAnimated_v3.safetensors',
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
        name: 'CaramelApple',
        type: '3D',
        model: 'https://civitai.com/models/98237/caramelapple',
        ipynb: 'caramel_apple_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/110904',
        checkpoint_file: 'caramel_apple_v2.safetensors',
    },
    {
        name: 'Colorful',
        type: '범용',
        model: 'https://civitai.com/models/7279/colorful',
        ipynb: 'colorful_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/297163',
        checkpoint_file: 'colorful_v73.safetensors',
    },
    {
        name: 'Deliberate',
        type: '범용',
        model: 'https://huggingface.co/XpucT/Deliberate',
        ipynb: 'deliberate_webui_colab',
        checkpoint: 'https://huggingface.co/XpucT/Deliberate/resolve/main/Deliberate_v5.safetensors',
        checkpoint_file: 'Deliberate_v5.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DarkSushiMix',
        type: '2D',
        model: 'https://civitai.com/models/24779/dark-sushi-mix-mix',
        ipynb: 'dark_sushi_mix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/56071?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'dark_sushi_mix.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DarkSushiMix 2.25D',
        type: '2D',
        model: 'https://civitai.com/models/24779?modelVersionId=93208',
        ipynb: 'dark_sushi_mix_mix_225d_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/93208?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'dark_sushi_mix_mix_225d.safetensors',
        bakedVAE: true,
    },
    {
        name: 'DarkSushiMix 2.5D',
        type: '2D',
        model: 'https://civitai.com/models/48671/dark-sushi-25d-25d',
        ipynb: 'dark_sushi_25d_25d_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/141866?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'dark_sushi_25d_25d.safetensors',
        bakedVAE: true,
    },
    
    {
        name: 'DreamShaper',
        type: '범용',
        model: 'https://civitai.com/models/4384/dreamshaper',
        ipynb: 'dreamshaper_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/128713?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'DreamShaper_v8.safetensors',
        bakedVAE: true,
    },
    {
        name: 'expmixLine V2',
        type: '2D',
        model: 'https://huggingface.co/AIARTCHAN/expmixLine_v2',
        ipynb: 'expmix_line_webui_colab',
        checkpoint: 'https://huggingface.co/Dorshu/expmixLine_v20/resolve/main/expmixLine_v20.safetensors',
        checkpoint_file: 'expmixLine_v20.safetensors',
    },
    {
        name: 'endlessReality',
        type: '실사',
        model: 'https://civitai.com/models/25573/endlessreality',
        ipynb: 'endless_reality_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/238387',
        checkpoint_file: 'endlessReality_v6.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Flat-2D Animerge',
        type: '2D',
        model: 'https://civitai.com/models/35960/flat-2d-animerge',
        ipynb: 'flat2d_animerge_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/266360',
        checkpoint_file: 'flat2DAnimerge_v45.safetensors',
        bakedVAE: true,
    },
    {
        name: 'henmixreal V1',
        type: '실사',
        model: 'https://civitai.com/models/20282/henmixreal',
        ipynb: 'henmix_v1_webui_colab',
        checkpoint: 'https://huggingface.co/naonovn/henmix/resolve/main/henmixReal_v10.safetensors',
        checkpoint_file: 'henmixReal_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'IceRealistic',
        type: '2D',
        model: 'https://civitai.com/models/51711/icerealistic?modelVersionId=56179',
        ipynb: 'icerealistic_webui_colab',
        checkpoint: 'https://huggingface.co/ninjaneural/webui/resolve/main/icerealistic_v21-fp16-no-ema.safetensors',
        checkpoint_file: 'icerealistic_v21-fp16-no-ema.safetensors',
        bakedVAE: false,
    },
    {
        name: 'ICBINP',
        type: '실사',
        model: 'https://civitai.com/models/28059/icbinp-i-cant-believe-its-not-photography',
        ipynb: 'icbinp_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/89464?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'icbinpICantBelieveIts_Final.safetensors',
        bakedVAE: true,
    },

    {
        name: 'KenCanMix',
        type: '실사',
        model: 'https://civitai.com/models/34686/kencanmix',
        ipynb: 'kencanmix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/65787',
        checkpoint_file: 'kencanmix_v2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'GhostMix',
        type: '2.5D',
        model: 'https://civitai.com/models/36520/ghostmix',
        ipynb: 'ghostmix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/76907',
        checkpoint_file: 'GhostMix-V2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'LOFI',
        type: '실사',
        model: 'https://civitai.com/models/9052/lofi',
        ipynb: 'lofi_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/87186?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'lofi_V2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Lyriel',
        type: '복합',
        model: 'https://civitai.com/models/22922/lyriel',
        ipynb: 'lyriel_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/72396?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'lyriel_v16.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX realistic better',
        type: '실사',
        model: 'https://civitai.com/models/43331/majicmix-realistic',
        ipynb: 'majic_mix_realistic_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/126470?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_realistic_betterV2V25.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX realistic v6',
        type: '실사',
        model: 'https://civitai.com/models/43331/majicmix-realistic',
        ipynb: 'majic_mix_realistic_v6_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/94640?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_realistic_v6.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX fantasy',
        type: '2.5D',
        model: 'https://civitai.com/models/41865/majicmix-fantasy',
        ipynb: 'majic_mix_fantasy_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/49055?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_fantasy_v20.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX lux',
        type: '실사',
        model: 'https://civitai.com/models/56967/majicmix-lux',
        ipynb: 'majic_mix_lux_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/61379?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_lux_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'majicMIX sombre',
        type: '2.5D',
        model: 'https://civitai.com/models/62778/majicmix-sombre',
        ipynb: 'majic_mix_sombre_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/67344?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'majicMIX_sombre_v10.safetensors',
        bakedVAE: true,
    },
    {
        name: 'MeinaMix',
        type: '2D',
        model: 'https://huggingface.co/Meina/MeinaMix',
        ipynb: 'meina_mix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/119057?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'MeinaV11bakedVAE.safetensors',
        bakedVAE: true,
    },
    {
        name: 'MeinaPastel',
        type: '2D',
        model: 'https://huggingface.co/Meina/MeinaPastel',
        ipynb: 'meina_pastel_webui_colab',
        checkpoint: 'https://huggingface.co/Meina/MeinaPastel/resolve/main/MeinaPastelV5%20-%20Baked%20VAE.safetensors',
        checkpoint_file: 'MeinaPastelV5Baked.safetensors',
    },
    {
        name: 'Mistoon Anime',
        type: '2D',
        model: 'https://civitai.com/models/24149/mistoonanime',
        ipynb: 'mistoon_anime_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/108545?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'mistoon_anime_v2.safetensors',
    },
    {
        name: 'Mistoon Sapphire',
        type: '2D',
        model: 'https://civitai.com/models/32022',
        ipynb: 'mistoon_sapphire_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/116574',
        checkpoint_file: 'mistoon_sapphire_v2.safetensors',
    },
    {
        name: 'MIX-Pro-V4',
        type: '2D',
        model: 'https://civitai.com/models/7241/mix-pro-v4',
        ipynb: 'mixpro_webui_colab',
        checkpoint: 'https://huggingface.co/AIARTCHAN/MIX-Pro-V4/resolve/main/MIX-Pro-V4-fp16.safetensors',
        checkpoint_file: 'mixProV4.safetensors',
        bakedVAE: true,
    },
    {
        name: 'NeverEnding Dream',
        type: '범용',
        model: 'https://civitai.com/models/10028/neverending-dream-ned',
        ipynb: 'ned_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/64094?type=Model&format=SafeTensor&size=full&fp=fp16',
        checkpoint_file: 'neverendingDreamNED_v122BakedVae.safetensors',
        bakedVAE: true,
    },
    {
        name: 'Juggernaut',
        type: '범용',
        model: 'https://civitai.com/models/46422/juggernaut',
        ipynb: 'juggernaut_reborn_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/274039',
        checkpoint_file: 'juggernaut_reborn.safetensors',
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
        name: 'Sardonyx REDUX',
        type: '2D',
        model: 'https://civitai.com/models/52548',
        ipynb: 'sardonyx_redux_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/105566?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'sardonyx_redux_v20.safetensors',
    },
    {
        name: 'seizaMix',
        type: '2D',
        model: 'https://civitai.com/models/116279/seizamix',
        ipynb: 'seizamix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/125903?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'seizamix_v2.safetensors',
    },
    {
        name: 'ToonYou',
        type: '2D',
        model: 'https://civitai.com/models/30240/toonyou',
        ipynb: 'toonyou_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/125771?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'ToonYou_beta6.safetensors',
    },
    {
        name: 'PerfectWorld',
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
        name: 'Realistic Vision',
        type: '실사',
        model: 'https://civitai.com/models/4201/realistic-vision-v50',
        ipynb: 'realistic_vision_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/245598?type=Model&format=SafeTensor&size=pruned&fp=fp16',
        checkpoint_file: 'realisticVision_v60.safetensors',
        bakedVAE: true,
    },
    {
        name: 'ReV Animated',
        type: '복합',
        model: 'https://civitai.com/models/7371/rev-animated',
        ipynb: 'rev_animated_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/46846?type=Model&format=SafeTensor&size=full&fp=fp32',
        checkpoint_file: 'revAnimated_v2.safetensors',
        bakedVAE: true,
    },
    {
        name: 'XXMix_9realistic',
        type: '실사',
        model: 'https://civitai.com/models/47274/xxmix9realistic',
        ipynb: 'XXMix_9realistic_colab',
        checkpoint: 'https://civitai.com/api/download/models/102222',
        checkpoint_file: 'xxmix_9realistic_v6.safetensors',
        bakedVAE: true,
    },
    {
        name: 'YabaL_Mix',
        type: '2.5D',
        model: 'https://civitai.com/models/28648/yabalmix',
        ipynb: 'yabal_mix_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/223560',
        checkpoint_file: 'yabaLMix_v7.safetensors',
        bakedVAE: true,
    },
    {
        name: 'YabaL_Mix True2.5D',
        type: '2.5D',
        model: 'https://civitai.com/models/60093/yabalmix-true25d',
        ipynb: 'yabal_mix_true25d_webui_colab',
        checkpoint: 'https://civitai.com/api/download/models/216284',
        checkpoint_file: 'yabaLMix_true25d_v5.safetensors',
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

async function make_readme2() {
    let readme = [];
    readme.push(`| 바로실행                                                                                                                                                                                        | 설치버전                                                                                                                                                                                        | Model                                                                                  | VAE  | Memo                    |`);
    readme.push(`| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ---- | ----------------------- |`);
    const list = checkpoints.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
    list.forEach((item) => {
        readme.push(`| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/comfyui/${item.ipynb}.ipynb) | [![Open In Colab](https://raw.githubusercontent.com/neuralninja22/colab/master/icons/colab-badge-install.svg)](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install_comfyui/${item.ipynb}.ipynb) | [${item.name}](${item.model})                    | ${item.bakedVAE ? '' : '선택'} | ${item.type}                      |`)
    });

    readmeText = readme.join('\n');
    fs.writeFileSync(`../COLAB_COMFYUI.md`, readmeText);
    return true;
}

(function () {
    try {
        copy_files();
        make_readme();
        make_readme2();
    } catch (e) {
        console.error(e);
    }
})();
