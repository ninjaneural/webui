# 기본 프롬프트

긍정 프롬프트

```
masterpiece, best quality, girl, black eyes, black hair, white sweater, blue jean, smile, cowboy shot,
```

부정 프롬프트

```
worst quality, low quality, nsfw
```

```
Steps: 30, Sampler: Euler a, CFG scale: 9, Seed: 412311980, Size: 512x768, Model hash: 42f7c9d482, Model: icerealistic_v21-fp16-no-ema, Clip skip: 2

```

긍정 프롬프트 순서 정리후

```
masterpiece, best quality, cinematic light, girl, cowboy shot, white sweater, blue jean, smile, black eyes, black hair,
```

긍정 프롬프트 순서 가중치 기본

```
(masterpiece, best quality), cinematic light, girl, cowboy shot, white sweater, blue jean, (smile), [angry], black eyes, black hair,
```

긍정 프롬프트 순서 가중치 중복

```
(masterpiece, best quality:1.3), cinematic light, girl, cowboy shot, white sweater, blue jean, (smile), [[[angry]]], black eyes, black hair,
```

긍정 프롬프트 순서 가중치 직접값입력

```
(masterpiece, best quality:1.3), cinematic light, outdoors, girl, cowboy shot, walking, (arms up:0.7), white sweater, blue jean, (smile), (angry:0.8), black eyes, black hair
```

# 로라

```
(masterpiece, best quality:1.3), cinematic light, outdoors, girl, cowboy shot, walking, (arms up:0.7), white sweater, blue jean, (smile), (angry:0.8), black eyes, red hair, chibi, makima \(chainsaw man\), <lora:blindbox_V1Mix:1> <lora:makimaChainsawMan_offset:1>
```

# 프롬프트 에디팅

```
(masterpiece, best quality:1.3), cinematic light, outdoors, [fantasy:cyberpunk:11]
```

```
(masterpiece, best quality:1.3), cinematic light, outdoors, [seoul street:cyberpunk:0.2]
```

```
(masterpiece, best quality:1.3), cinematic light, outdoors, [dog|cat]
```
