/opt/conda/envs/colabui/bin/python3 -m pip install httpx==0.24.1

if [ $4 == True ]; then
  /opt/conda/envs/colabui/bin/python3 -m pip install -U openmim
  /opt/conda/envs/colabui/bin/python3 -m mim install mmcv>=2.0.0 -f https://download.openmmlab.com/mmcv/dist/cu118/torch2.0.0/index.html
  /opt/conda/envs/colabui/bin/python3 -m mim install mmdet>=3.0.0
fi

git clone -b $2 https://github.com/ninjaneural/colabui /kaggle/working/$1
cd /kaggle/working/$1

if [ $3 == True ]; then
  git clone https://github.com/Mikubill/sd-webui-controlnet ./extensions/controlnet
fi
if [ $4 == True ]; then
  git clone -b mmdet3 https://github.com/ninjaneural/ddetailer ./extensions/ddetailer
fi
if [ $5 == True ]; then
  git clone https://github.com/Bing-su/adetailer ./extensions/adetailer
fi
if [ $6 == True ]; then
  git clone https://github.com/ninjaneural/segment-anything ./extensions/segment-anything
fi

git clone https://github.com/adieyal/sd-dynamic-prompts ./extensions/sd-dynamic-prompts
git clone https://github.com/mcmonkeyprojects/sd-dynamic-thresholding ./extensions/sd-dynamic-thresholding
git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 ./extensions/multidiffusion-upscaler
git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete ./extensions/tagcomplete
git clone https://github.com/Coyote-A/ultimate-upscale-for-automatic1111 ./extensions/ultimate-upscale

git clone https://github.com/neuralninja22/images-browser ./extensions/images-browser
git clone https://github.com/kohya-ss/sd-webui-additional-networks ./extensions/additional-networks
git clone https://github.com/picobyte/stable-diffusion-webui-wd14-tagger ./extensions/wd14-tagger
git clone https://github.com/yankooliveira/sd-webui-photopea-embed ./extensions/photopea-embed

git clone https://github.com/fkunn1326/openpose-editor ./extensions/openpose-editor
git clone https://github.com/hnmr293/posex ./extensions/posex
git clone https://github.com/fishslot/video_loopback_for_webui ./extensions/video_loopback

if [ $6 == True ]; then
  mkdir ./models/sam
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth -d ./models/sam -o sam_vit_h_4b8939.pth
fi
