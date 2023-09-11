#  LoRA

> [Harley Quinn](https://civitai.com/models/55639/harley-quinn-or-suicide-squad)  


# 프롬프트 

prompt  
```
masterpiece, best quality,(detailed background), (beautiful detailed face, beautiful detailed eyes), cute, pikkyharleyquinn, 1girl, solo, looking at viewer, blonde hair, multicolored hair, blue hair, pink hair, twintails, long hair, bangs, blue eyes, green eyes, red lips, choker, shorts, makeup, lipstick, (white t-shirts:1.2), <lora:HarleyQuinn:1>
```

neg_prompt  
```
(worst quality,low quality:1.3), navel, easynegative,nsfw, nude,
```

# 영상/이미지 변환

ffmpeg으로 영상->이미지 
> input.mp4 영상파일  
> -q:v 1 => JPEG퀄리티 좋게  
> -vf fps=15 => 15프레임  
```
ffmpeg -i "./input.mp4" -q:v 1 -vf fps=15 "./input/%07d.jpg"
```

ffmpeg으로 이미지->영상 (사움드 포함)
> -r 15 => 15프레임  
> -start_number 1 => 0000001.jpg 부터 시작  
> -i "./input/%07d.jpg" => input 폴더  
> -i sound.mp4 -c:a copy => sound.mp4파일에서 오디오(사운드)복사  
```
ffmpeg -y -r 15 -start_number 1 -i "./input/%07d.jpg" -i sound.mp4 -c:a copy -c:v libx264 -pix_fmt yuv420p -crf 17 -map 0:v -map 1:a "./output.mp4"
```

ffmpeg으로 이미지->영상 (사운드 미포함)
> -r 15 => 15프레임  
> -start_number 1 => 0000001.jpg 부터 시작  
> -i "./input/%07d.jpg" => input 폴더  
```
ffmpeg -y -r 15 -start_number 1 -i "./input/%07d.png" -c:v libx264 -pix_fmt yuv420p -crf 17 "./output.mp4"
```

파일명 일괄 변경 (_0_mask제거)
```
ren ???????_0_mask.png ???????.png
```
