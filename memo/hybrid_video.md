# 프롬프트 정보

```
{
    "0": "(masterpiece, best quality, intricate details:1.2), girl, solo,  anna of arendelle, green nightgown, blue eyes, twin braids, brown hair, inside the palace, looking at viewer, smile, <lora:anna_of_arendelle_v22:0.7> --neg EasyNegative, text, watermark",
    "60": "(masterpiece, best quality, intricate details:1.2), girl, solo,  Ariel, The Little Mermaid, red hair, under the sea, smile, <lora:Ariel_character-20:0.7> --neg EasyNegative, text, watermark",
    "120": "(masterpiece,best quality:1.2), jasmine, girl, solo, smile, navel, holding, bare shoulders, jewelry, flower, earrings, midriff, pants, necklace, off shoulder, bracelet, see-through, white flower, gem, multi-tied hair, arabian clothes,realistic, (ultra detailed), light particles, lighting, (highly detailed:1.2),(detailed face:1.2), colorful  <lora:jasmineV3:0.6> --neg EasyNegative, text, watermark",
    "180": "(masterpiece, best quality, intricate details:1.2), girl, solo,  HshinoAi,gloves,  long hair, star \\(symbol\\), looking at viewer, (purple hair:1.2), purple eyes, hair ornament, :p, frills, pink shirt, smile, sleeveless, shirt, idol, symbol-shaped pupils, bangs, one side up, star-shaped pupils, dress pull, Roaring Twenties, isometric, sky, flower, cliff, <lora:HoshinoAi_v9-000007:0.6> --neg EasyNegative, text, watermark",
    "240": "(masterpiece, best quality, intricate details:1.2), girl, solo,  rapunzel <lora:rapunzel:0.6> --neg EasyNegative, text, watermark"
}
```

# LoRA 정보

[https://civitai.com/models/42764/frozen-anna](https://civitai.com/models/42764/frozen-anna)
[https://civitai.com/models/46315/ariel-the-little-mermaid-princess-disney-by-yeiyeiart](https://civitai.com/models/46315/ariel-the-little-mermaid-princess-disney-by-yeiyeiart)
[https://civitai.com/models/37870/jasmine-aladin-disney](https://civitai.com/models/37870/jasmine-aladin-disney)
[https://civitai.com/models/43409/hoshino-ai-or-or-oshi-no-ko-or](https://civitai.com/models/43409/hoshino-ai-or-or-oshi-no-ko-or)

# Deforum 설정파일

[https://raw.githubusercontent.com/ninjaneural/webui/master/memo/hybrid_video/test_settings.txt](https://raw.githubusercontent.com/ninjaneural/webui/master/memo/hybrid_video/test_settings.txt)

# 로컬사용시 체크포인트, 로라등 공유설정

```
@echo off

set PYTHON=
set GIT=
set VENV_DIR=
set COMMANDLINE_ARGS=--ckpt-dir X:/Stable-diffusion --lora-dir X:/Lora --hypernetwork-dir D:/sd-webui/models/hypernetworks --vae-dir D:/sd-webui/models/VAE --embeddings-dir D:/sd-webui/embeddings --lyco-dir x:/LyCORIS --controlnet-annotator-models-path=D:/sd-webui/extensions/sd-webui-controlnet/annotator/downloads

call webui.bat --theme dark --xformers --no-half-vae --api
```

# Deforum 익스텐션 (64배수 수정)

script/deforum_helpers/noisy.py 77번째줄 if문추가

```
    if noise_amt > 0:
        sample = cv2.addWeighted(sample, 1 - noise_amt, noise_to_add, noise_amt, 0)

```
