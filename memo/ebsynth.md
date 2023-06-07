- 긍정 프롬프트

```
(masterpiece,best quality:1.2), highres, 4k, clearly, complex detail, anime style, black eyes, short hair, chibi, simple background,
```

- 부정 프롬프트

```
(worst quality, low quality:1.2), EasyNegative, makeup, (nsfw, nude),
```

- 이미지로 변환 (비디오 -> 이미지들)

```
ffmpeg -i "./input.mp4" -vf fps=30 "./input/%07d.png"
```

- 오디오 포함한 영상으로 변환 (이미지들+오디오 -> 비디오)

```
ffmpeg -y -r 30  -i "./output/%07d.png" -i input.mp4 -c:a copy -c:v libx264 -pix_fmt yuv420p -crf 17 -map 0:v -map 1:a "./output.mp4"
```

- 영상으로 변환 (이미지들 -> 비디오)

```
ffmpeg -y -r 30  -i "./output/%07d.png" -c:v libx264 -pix_fmt yuv420p -crf 17 "./output.mp4"
```

# 시작인덱스 설정

- 이미지들 -> 비디오

```
ffmpeg -y -r 30 -start_number 1 -i "./output/%07d.png" -c:v libx264 -pix_fmt yuv420p -crf 17 "./output.mp4"
```

- 이미지들+오디오 -> 비디오

```
ffmpeg -y -r 30 -start_number 1 -i "./output/%07d.png" -i input.mp4 -c:a copy -c:v libx264 -pix_fmt yuv420p -crf 17 -map 0:v -map 1:a "./output.mp4"
```
