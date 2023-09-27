# 이미지1 정보

긍정 프롬프트

```
masterpiece, beautiful woman supermodel ,perfect lighting ,(full body,wide shot),standing,space background, smirk, tiara, sailor senshi uniform,blue hair,blue skirt,

```

부정 프롬프트

```
(worst quality, low quality, normal quality:2),cartoon, painting, illustration,3d,cgi,render,garter belt,watermark,artist logo,weapons,staff,baton, too many fingers
```

샘플러, 모델, 시드

```
Steps: 30, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 3715666989, Size: 512x768, Model hash: e4a30e4607, Model: majicmixRealistic_v6, VAE hash: c6a580b13a, VAE: vae-ft-mse-840000-ema-pruned.vae.pt, Denoising strength: 0.4, Clip skip: 2, Hires upscale: 2, Hires steps: 15, Hires upscaler: 4x-UltraSharp, Version: 1.6.0
```

# 이미지2 정보

긍정 프롬프트

```
official art, unity 8k wallpaper, ultra detailed, beautiful and aesthetic, beautiful,, channeling arcane energies that ripple and distort the very air,abstract perspective, covered with small Nereid, gooey liquid neon color hair and lips, highly refractive skin with small rainbow sparkles, glowing color exploding cell shading, Voronoi diagrams sparkling lighting, Dappled Light, ((A canvas of code and creativity, bits and brushes unite, unveiling the portrait beyond pixels)), large breasts, dreamy magical atmosphere, (skin texture), (film grain), (warm hue, warm tone), cinematic light, side lighting, The Joker (DC Comics): The Joker's colorful suit, wild green hair, and maniacal grin make him an iconic and recognizable character for cosplay., by boris vallejo and Simon Stalenhag
```

부정 프롬프트

```
(easynegative, ng_deepnegative_v1_75t), (worst quality, low quality:1.4), (lowres, bad anatomy, text, error, blurry, lineart, pixel art, watermark, text, signature, zombie, sketch, interlocked fingers, comic), (bad hand, extra hands, extra fingers, too many fingers, fused fingers, bad arm, distorted arm, extra arms, fused arms, extra legs, missing leg, disembodied leg, extra nipples, detached arm, liquid hand, inverted hand, disembodied limb)
```

샘플러, 모델, 시드

```
Steps: 30, Sampler: DPM++ 2M Karras, CFG scale: 7, Seed: 373183272, Size: 512x768, Model hash: e4a30e4607, Model: majicmixRealistic_v6, VAE hash: 735e4c3a44, VAE: vae-ft-mse-840000-ema-pruned.vae.safetensors, Denoising strength: 0.4, Clip skip: 2, Hires upscale: 2, Hires steps: 15, Hires upscaler: 4x-UltraSharp, Version: v1.6.0
```

# animatediff 명령어

```
!animatediff generate -c 'config/prompts/prompt_runtime.json' -W 512 -H 768 -L 32 -I 이미지경로
```

# ffmpeg 직접실행 명령어

- 12프레임
- 0부터 시작. 3자리 파일명 (000.png)
- output.mp4 저장

```
ffmpeg -y -r 12 -start_number 0 -i "/output경로/%03d.png" -c:v libx264 -pix_fmt yuv420p -crf 17 output.mp4
```

