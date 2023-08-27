> https://github.com/s9roll7/animatediff-cli-prompt-travel  
> (https://github.com/ninjaneural/animatediff-cli-mix 코랩용 수정버전)  

```
git clone https://github.com/ninjaneural/animatediff-cli-mix
cd animatediff-cli-mix

python -m venv .venv

.venv\Scripts\activate

python -m pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
python -m pip install xformers

pip install -e .
```

# 모션모듈 파일다운로드

> https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v14.ckpt  
> https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt  
> data\models\motion-module 이곳에 저장  


# 설정파일 수정 config\prompts\prompt.json

> 로컬 체크포인트 예제  
> checkpoint, lora 직접 경로 입력

```
{
  "name": "ToonYou",
  "base": "",
  "path": "X:/Stable-Diffusion/majicmixRealistic_v6.safetensors",
  "motion_module": "models/motion-module/mm_sd_v15.ckpt",
  "compile": false,
  "seed": [
    3230656755
  ],
  "scheduler": "k_dpmpp_2m",
  "steps": 30,
  "guidance_scale": 8.5,
  "clip_skip": 2,
  "prompt": [
    "masterpiece, best quality,8k uhd,(ultra realistic,realistic, photo-realistic, RAW),spring day, soft lighting, high quality, film grain, 1girl,cute, young,long hair, black hair,lustrous skin,medium breast,(smile:0.6), outdoors, t-shirt, cutoff_jeans, front view, (running:1.2),beautiful hand,"
  ],
  "n_prompt": [
    "ng_deepnegative_v1_75t, (worst quality,low quality,normal quality:1.4), lowres, watermark, monochrome, nsfw, nude,"
  ],
  "lora_map": {
    "x:/Lora/character/sailor_moon_v1.safetensors": 1.0,
    "Lora/effect/InstantPhotoX3.safetensors": 0.3,
    "Lora/character/sailor_moon_v1.safetensors": 1
  },
  "controlnet_map": {
    "input_image_dir": "controlnet_images/test",
    "controlnet_tile": {
      "enable": false,
      "controlnet_conditioning_scale": 1.0,
      "control_guidance_start": 0.0,
      "control_guidance_end": 1.0,
      "control_scale_list": [
        0.5,
        0.4,
        0.3,
        0.2,
        0.1
      ]
    },
    "controlnet_ip2p": {
      "enable": false,
      "controlnet_conditioning_scale": 1.0,
      "control_guidance_start": 0.0,
      "control_guidance_end": 1.0,
      "control_scale_list": [
        0.5,
        0.4,
        0.3,
        0.2,
        0.1
      ]
    },
    "controlnet_lineart_anime": {
      "enable": false,
      "controlnet_conditioning_scale": 1.0,
      "control_guidance_start": 0.0,
      "control_guidance_end": 1.0,
      "control_scale_list": [
        0.5,
        0.4,
        0.3,
        0.2,
        0.1
      ]
    },
    "controlnet_openpose": {
      "enable": false,
      "controlnet_conditioning_scale": 1.0,
      "control_guidance_start": 0.0,
      "control_guidance_end": 1.0,
      "control_scale_list": [
        0.5,
        0.4,
        0.3,
        0.2,
        0.1
      ]
    },
    "controlnet_softedge": {
      "enable": false,
      "controlnet_conditioning_scale": 0.6,
      "control_guidance_start": 0.0,
      "control_guidance_end": 1.0,
      "control_scale_list": [
        0.5,
        0.4,
        0.3,
        0.2,
        0.1
      ]
    }
  }
}
```


# 실행

```
animatediff generate -h 
animatediff generate -W 512 -H 768 -L 16
```

