
# 샘플이미지

<img src="./comfyui_changepic/image1.jpg" width="480"/>
<img src="./comfyui_changepic/image2.jpg" width="480"/>
<img src="./comfyui_changepic/image3.jpg" width="480"/>
<img src="./comfyui_changepic/image4.jpg" width="480"/>
<img src="./comfyui_changepic/image5.jpg" width="480"/>

# 워크플로우

워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_changepic/workflow1.json>

CLIPSeg 워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_changepic/workflow2.json>

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 그외 커스텀노드

<https://github.com/storyicon/comfyui_segment_anything>

> Segment Anything (클릭해서 마스크 선택, 프롬프트로 마스크 선택)

<https://github.com/Fannovel16/comfyui_controlnet_aux>

> ControlNet 프리프로세서 노드

<https://github.com/pythongosssss/ComfyUI-Custom-Scripts>

> pysssss 시리즈 노드 / 하단 이미지 피드

<https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes> 

> CR_ 시리즈 노드 

<https://github.com/biegert/ComfyUI-CLIPSeg>

> CLIPSeg (프롬프트로 마스크 선택)


# ControlNet 모델

<https://huggingface.co/lllyasviel/ControlNet-v1-1/tree/main> (오피셜)

<https://huggingface.co/comfyanonymous/ControlNet-v1-1_fp16_safetensors/tree/main> (fp16버전:저용량)

> 다운받아서 models/controlnet 에 저장  
> 이 영상에서는 control_v11p_sd15_openpose_fp16.safetensors 만 받으셔도되요~ 


# 사용한 체크포인트

PicX_Real_V10


# 사용한 프롬프트

```
# 부정 프롬프트
(worst quality,low quality,normal quality:1.2),nsfw, nude, mature, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime,

# 긍정 프롬프트들

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
girl,the god speed running as fast as the speed of light, electro thunder strike effect as a background, using the highest render computational, very complex and detailed, wearing the flash suit on

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
freckles, long hair, ginger hair, grey eyes, bare shoulders,miniskirt,strappy,crop top, apocalypse, desert, rusty car, sitting, boots, 

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
girl, classy scottish scarf, flirty, stand on snowy streets in Stockholm, with coat, day

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
girl, the scene of a beautiful mermaid swimming in the deep sea,long flowing silver hair,gorgeous fishtail skirt,the skirt is inlaid with shining pearls and gems,noble and mysterious,the skin is white,the surrounding bubbles and water waves add to the motion and depth of the picture,the peace and mystery in the deep sea,beautiful and romantic,full of imagination and artistic appeal,fantasism,fantasy style,masterpieces,pastel colors,deep sea scenes,movie lighting,high contrast,unimaginable beauty,

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
extremely beautiful,intricate details,
girl,by Charles Schridde,ivory,futuristic style,sleek,modern,ultra modern,high tech,detailed,Ornate And Intricate, professional photography,high contrast,

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
girl,sky,stunning beauty,20 years old,in blue universe Print spandex full Bodysuit,

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
girl, casual wear, flirty, walking on sunny streets in hawaii

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,
extremely beautiful,intricate details,
girl,space, bodysuit, moon,deep scenes,movie lighting,high contrast,unimaginable beauty,

masterpiece, best quality, (realistic, photo-realistic), amazing, finely detail, incredibly absurdres, huge filesize, ultra-detailed, highres, extremely detailed CG unity 8k wallpaper, ray tracing, 1girl, 20y.o. young girl, (flawless beauty face, beautiful, aesthetic:1.2), big eyes, tall, perfect female body proportions, slender and narrow waist, a flawless girl with angelic wings reclining on a golden throne, dressed in an intricate white robe embellished with gold accents and holding a jeweled scepter. She has an ethereal beauty, with flowing blonde hair and a serene expression. The throne is ornately carved and encrusted with precious gems and pearls. Behind her, a set of large feathered wings in whites and golds arc gracefully. The scene is bathed in golden celestial light with solarpunk elements. The style combines futuristic, celestialpunk and solarpunk with exquisite attention to detail in the clothing, wings and throne. The composition is symmetrical and aesthetically balanced.

masterpiece, best quality,8k uhd, realistic, photorealistic, RAW,photograph of a cute girl,blackhair, asian girl,pale skin,(no freckles:0.4),blush,sweater,innocent,old city, 19th century great depression,Porta 160 color,shot on ARRI ALEXA 65,bokeh,sharp focus on subject,shot by Don McCullin,
a cute woman, crouching, white dress, pov, looking at viewer, flower blonde hair, brown eyes, sunny, clouds, cleavage, expressionless
```