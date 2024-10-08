
# 링크

* flux.1 홈페이지  
  <https://github.com/black-forest-labs/flux>


# 모델 

## UNet 모델  
  models/unet 에 저장

  * **flux.1 dev 양자화 모델(GGUF)**  
    <https://huggingface.co/city96/FLUX.1-dev-gguf/tree/main>

  * flux.1 dev 기본모델  
    <https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/flux1-dev.safetensors>  

  * flux.1 dev (fp8)  
    <https://huggingface.co/Kijai/flux-fp8/blob/main/flux1-dev-fp8.safetensors>  

  * flux.1 schnell 양자화 모델(GGUF)  
    <https://huggingface.co/city96/FLUX.1-schnell-gguf/tree/main>

## CLIP 모델  
  models/clip 에 저장

  * **t5xxl_fp8_e4m3fn.safetensors, clip_l.safetensors**  
    <https://huggingface.co/comfyanonymous/flux_text_encoders/tree/main>  

  * t5xxl 양자화모델  
    <https://huggingface.co/city96/t5-v1_1-xxl-encoder-gguf/tree/main>

## VAE 모델

  * ae.safetensors  
    <https://huggingface.co/black-forest-labs/FLUX.1-schnell/blob/main/ae.safetensors>


## 커스텀노드

  <https://github.com/city96/ComfyUI-GGUF>  
  Manager에서 검색해서 설치하면 편해요!


## nf4 모델이용방법

  양자화대신 nf4 를 이용하려면 아래 커스텀 노드를 설치하고 체크포인트를 받아서 이용하면되요  
  <https://github.com/comfyanonymous/ComfyUI_bitsandbytes_NF4>  

  * 체크포인트  
    models/checkpoint 에 저장  
    <https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4.safetensors>


## forge 이용방법
  
  체크포인트를 받아서 이용하면되요!  

  * nf4 체크포인트  
    <https://huggingface.co/lllyasviel/flux1-dev-bnb-nf4/blob/main/flux1-dev-bnb-nf4.safetensors>

  * fp8 체크포인트  
    <https://civitai.com/models/622579/flux1-dev-fp8>



# 워크플로우

워크플로우

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_flux/workflow_gguf.json> (gguf 워크플로우)

<https://raw.githubusercontent.com/ninjaneural/webui/master/memo/comfyui_flux/workflow_nf4.json> (nf4 워크플로우)

(마우스 오른쪽버튼을 누르고 링크 저장을 눌러주세요)


# 사용한 프롬프트

```
running chick running with a knife, 
Mickey Mouse with huge swords in the middle of the desert, sandstorm blowing, very realistic photo
A cat runs away with a fish in its mouth through a market

Minecraft characters Iron Man, Thor, and Captain America walk down a street with Van Gogh's Starry Night in the background.
In a town that looks exactly like Van Gogh's Starry Night, Minecraft characters Iron Man, Thor, and Captain America are fighting each other.

jesus cat walking on water. It's a cinematic and very realistic scene.

Donald Trump and Biden dance together at the White House.
Elon Musk praying. Made of pixel art

cute cat like jesus walking on water. clouds are in the shape of the text "Holy", It's a cinematic and very realistic scene.

object that express AI and the logo with the text "NeuralNinja" in the middle.
A blue burning skeleton with leather clothes appears on the hell, There is a burning text in the background that says "Welcome". It's a cinematic and hyper-realistic scene.

A beautiful woman with electricity running through her body poses in a vacant lot, wearing leather jeans and a jacket. The electricity extends like spiderweb-like wings. The atmosphere is cinematic, with hyper-realistic detail.
A beautiful woman is struck by lightning and looks like a skeleton. The surroundings are filled with electric effects. A vacant lot in the middle of the city. The atmosphere is cinematic, with hyper-realistic detail.

portrait of a female character with long, flowing hair that appears to be made of ethereal, swirling patterns resembling the Northern Lights or Aurora Borealis. Her face is serene, with pale skin and striking features. She wears a dark-colored outfit with subtle patterns. The ```