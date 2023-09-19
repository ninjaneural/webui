

# 실행용 노트북 설명서

install버전으로 최초 한번 설치한후에 이후에 **run.ipynb** 으로 설치없이 실행
* 프록시없이 직접실행 run_direct.ipynb 추가  
* SDXL용 run_xl.ipynb 추가  

## 실행방법

### 1. 직접실행 (구글드라이브에서 실행, 수정가능)

1. [이곳](https://github.com/ninjaneural/webui/blob/master/install/run.ipynb)에서 run.ipyb 파일 다운로드 (클릭하고 오른쪽위에 다운로드버튼 클릭)

2. 구글드라이브에 업로드

3. 구글드라이브에 Colab앱 설치

    <img src="./install/1.png" />

    <img src="./install/2.png" />

    <img src="./install/3.png" />


3. 구글드라이브에서 실행 (run.ipynb 더블클릭)


### 2. 간편실행 (github에서 실행, 수정불가)

> [run.ipynb 실행](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install/run.ipynb)  

## 프록시없이 직접실행 run_direct.ipynb

* SDXL용 ControlNet 모델연결

> [run_direct.ipynb 다운로드](https://github.com/ninjaneural/webui/blob/master/install/run_direct.ipynb)  
> [run_direct.ipynb 실행](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install/run_direct.ipynb)  

## SDXL용 run_xl.ipynb

* SDXL용 ControlNet 모델연결

> [run_xl.ipynb 다운로드](https://github.com/ninjaneural/webui/blob/master/install/run_xl.ipynb)  
> [run_xl.ipynb 실행](https://colab.research.google.com/github/ninjaneural/webui/blob/master/install/run_xl.ipynb)  

## 폴더 설명

> sd-webui 기본 폴더와 동일  

* install/outputs : 생성된 이미지 저장위치
* install/models/Stable-diffusion/ : 모델(checkpoint)
* install/models/Lora : 로라(LoRA)
* install/models/LyCORIS : 라이코리스(LyCORIS)
* install/embeddings : 임베딩(Textual Inversion)
* install/hypernetworks : 하이퍼워크(Hyperworks)
* install/extensions/sd-dynamic-prompt/wildcards : 와일드카드 파일(wildcard)

## WebUI내에서 Extension 설치가능

