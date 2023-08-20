#  LoRA

> [FilmVelvia3](https://civitai.com/models/33208/filmgirl-film-grain-lora-and-loha)  
> [InstantPhotoX3](https://civitai.com/models/52652?modelVersionId=102533)  

# Embedding

[ng_deepnegative_v1_75t](https://civitai.com/models/4629)

# 프롬프트 정보 (와일드카드)

긍정 프롬프트

```
masterpiece, best quality,8k uhd,(ultra realistic,realistic, photorealistic, RAW),
spring day, soft lighting, high quality, film grain, 1girl,cute, young,
long hair, black hair,lustrous skin,medium breast,(smile:0.6),
{indoors|outdoors}, __tops__, __bottoms__, __place__, 
<lora:FilmVelvia3:0.3> <lora:InstantPhotoX3:0.3>
```

부정 프롬프트

```
ng_deepnegative_v1_75t, (worst quality,low quality,normal quality:1.4), lowres, watermark, monochrome, makeup, nipples, nude,
```

샘플러, 모델, 시드

```
Steps: 40, Sampler: Eular a, CFG scale: 7, Seed: -1, Size: 512x768, Model hash: e4a30e4607, Model: majicmixRealistic_v6, Denoising strength: 0.4, Clip skip: 2, ControlNet 0: "preprocessor: dw_openpose_full, model: control_v11p_sd15_openpose_fp16 [73c2b67d], weight: 1, starting/ending: (0, 1), resize mode: Crop and Resize, pixel perfect: True, control mode: ControlNet is more important, preprocessor params: (512, -1, -1)", Hires upscale: 2, Hires steps: 20, Hires upscaler: 4x-UltraSharp, Lora hashes: "FilmVelvia2: 142628a09ce9, InstantPhotoX3: 7036b103fef3", TI hashes: "ng_deepnegative_v1_75t: 54e7e4826d53", Version: v1.5.1
```

# 마지막 이미지 정보

긍정 프롬프트

```
masterpiece, best quality,8k uhd,(ultra realistic,realistic, photorealistic, RAW),
spring day, soft lighting, high quality, film grain, 1girl,cute, young,
long hair, black hair,lustrous skin,medium breast,(smile:0.6),
peacoat, suspender skirt,
outdoors,(worldwar:1.3), (war:1.3), sitting_tank, tank, fire, explosion, crowd soldiers,
<lora:FilmVelvia3:0.3> <lora:InstantPhotoX3:0.3>
```

부정 프롬프트

```
ng_deepnegative_v1_75t, (worst quality,low quality,normal quality:1.4), lowres, watermark, monochrome, makeup, nipples, nude,
```

