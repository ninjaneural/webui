## 배경이미지 프롬프트

긍정프롬프트

```
(masterpiece,best quality:1.2), highres, 8k, UHD, cinematic light,final fantasy, outdoor, sunset, (no_humans:1.3)
```

부정프롬프트

```
(worst quality, low quality:1.2),sketches,monochrome,grayscale,signature,watermark,text, error, missing fingers,(nude,nsfw)
```

샘플러,모델,시드

```
Steps: 24, Sampler: DPM++ SDE Karras, CFG scale: 9,
Seed: 2152129593, Size: 960x512, Model hash: 44eccf4d61, Model: CamelliaMix_2.5D, Clip skip: 2
```

## 캐릭터 프롬프트1

- 캐릭터1

```
(masterpiece,best quality:1.2), highres, 8k, UHD, complex detail, extremely detailed,delicate skin, 1girl, solo, glamorous, traditional dress, hanbok, black hair, one braid hair,standing, full_body
```

- 캐릭터2

```
(masterpiece,best quality:1.2), highres, 8k, UHD, complex detail, extremely detailed,delicate skin, 1girl, solo, slender, armor, horns, fake horns, helmet, full armor, horned headwear, silver hair, horned helmet,standing, full_body
```

- 캐릭터3

```
(masterpiece,best quality:1.2), highres, 8k, UHD, complex detail, extremely detailed,delicate skin, 1girl, solo, pretty, office uniform, gold curvy  hair, pretty,(standing, full_body)
```

- 캐릭터3

```
(masterpiece,best quality:1.2), highres, 8k, UHD, complex detail, extremely detailed,delicate skin, 1girl, solo, striped hoodie, suspender_skirt, red messy hair,hime cut, planet earrings,young,sit, full_body
```

- 추가 배경 castle

```
(masterpiece,best quality:1.2), highres, 8k, UHD, floating castle, cloud
```

- 추가 배경

```
(masterpiece,best quality:1.2), highres, 8k, UHD, mountain, river, (no_humans:1.4)
```

## 캐릭터 프롬프트2 (LoRA)

- 캐릭터1

```
(masterpiece,best quality:1.2), highres, 8k, UHD,(complex detail), extremely detailed,delicate skin, lucy \(cyberpunk\), 1girl, asymmetrical_hair, belt, bodysuit, covered mouth, covered navel, detached sleeves, grey eyes, hip vent, looking at viewer, pouch, short hair, solo, (white hair), wire, short shorts, shorts, open jacket, standing, full_body, <lora:lucyCyberpunk_35Epochs:0.7>
```

- 캐릭터2

```
(masterpiece,best quality:1.2), highres, 8k, UHD,(complex detail), extremely detailed,delicate skin, makima \(chainsaw man\), 1girl, solo, red_hair, long braided hair, golden eyes, bangs, medium breasts, white shirt, necktie, stare, smile, (evil:1.2), looking at viewer, standing, full_body  <lora:makimaChainsawMan_offset:0.7>
```

- 캐릭터3

```
(masterpiece,best quality:1.2), highres, 8k, UHD,(complex detail), extremely detailed,delicate skin, murata yuusuke, 1girl, bangs, breasts, collared dress, fubuki \(one-punch man\), fur coat, green eyes, (green hair), jewelry, one-punch man, short hair, solo, standing, full_body<lora:murataYusukeOnePunchMan_1:0.7>
```

- 캐릭터4

```
(masterpiece,best quality:1.2), highres, 8k, UHD,(complex detail), extremely detailed,delicate skin, jim lee, 1girl, wonder woman, armlet, black hair, blurry, bracer, breath, cape, looking at viewer, parted lips, pommel, realistic, reverse grip, shield, skirt, solo, superhero, tiara, toned, standing, full_body  <lora:jimLeeDCComicsMarvel_offset:0.7>
```

- 추가 화산폭발

```
(masterpiece,best quality:1.2), highres, 8k, UHD, cinematic light, (Volcanic eruption, meteor shower, cloudy:1.3)
```

## LoRA 링크

https://civitai.com/models/8949/jim-lee-dc-comics-marvel-style-lora

https://civitai.com/models/5452/murata-yusuke-one-punch-man-style-lora

https://civitai.com/models/5373/makima-chainsaw-man-lora

https://civitai.com/models/5477/lucy-cyberpunk-edgerunners-lora

## 컨트롤넷 이미지

<img src="./regionprompt/pose.png" width="480"/>
