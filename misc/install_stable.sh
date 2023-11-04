pip install -q torch==1.13.1+cu117 torchvision==0.14.1+cu117 torchtext==0.14.1 torchaudio==0.13.1 torchdata==0.5.1 --extra-index-url https://download.pytorch.org/whl/cu117
pip install -q xformers==0.0.20
pip install -q httpx==0.24.1

if [ $3 == True ]; then
  pip install -U openmim
  mim install mmcv-full -f https://download.openmmlab.com/mmcv/dist/cu117/torch1.13/index.html
  pip install mmdet==2.28.2
fi

git clone -b stable1 https://github.com/neuralninja22/sd-webui /content/$1
cd /content/$1

if [ $2 == True ]; then
  git clone -b stable1 https://github.com/ninjaneural/controlnet ./extensions/controlnet
fi
if [ $3 == True ]; then
  git clone https://github.com/ninjaneural/ddetailer ./extensions/ddetailer
fi
if [ $4 == True ]; then
  git clone -b v23.10.1 https://github.com/Bing-su/adetailer ./extensions/adetailer
fi
if [ $5 == True ]; then
  git clone https://github.com/ninjaneural/segment-anything ./extensions/segment-anything
fi

git clone https://github.com/adieyal/sd-dynamic-prompts ./extensions/sd-dynamic-prompts
git clone https://github.com/mcmonkeyprojects/sd-dynamic-thresholding ./extensions/sd-dynamic-thresholding
git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete ./extensions/tagcomplete
git clone https://github.com/Coyote-A/ultimate-upscale-for-automatic1111 ./extensions/ultimate-upscale-for-automatic1111
git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 ./extensions/multidiffusion-upscaler-for-automatic1111

git clone -b stable1 https://github.com/neuralninja22/images-browser ./extensions/images-browser
git clone -b stable https://github.com/ninjaneural/additional-networks ./extensions/additional-networks
git clone https://github.com/neuralninja22/wd14-tagger ./extensions/wd14-tagger
git clone https://github.com/ninjaneural/photopea-embed ./extensions/photopea-embed
git clone https://github.com/ninjaneural/video-util ./extensions/video-util
git clone https://github.com/KohakuBlueleaf/a1111-sd-webui-lycoris ./extensions/lycoris

git clone https://github.com/fkunn1326/openpose-editor ./extensions/openpose-editor
git clone https://github.com/hnmr293/posex ./extensions/posex
git clone https://github.com/fishslot/video_loopback_for_webui ./extensions/video_loopback
git clone https://github.com/ninjaneural/mov2mov ./extensions/mov2mov
git clone https://github.com/ninjaneural/depth-lib ./extensions/depth-lib

if [ $5 == True ]; then
  mkdir ./models/sam
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth -d ./models/sam -o sam_vit_h_4b8939.pth
fi

sed -i -e "/    prepare_environment()/a\    os.system\(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" ./repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" ./launch.py
wget https://raw.githubusercontent.com/neuralninja22/colab/master/misc/config.json -O ./config.json
