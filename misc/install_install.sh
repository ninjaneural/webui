
git clone -b $2 https://github.com/ninjaneural/colabui /content/$1
cd /content/$1

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

git clone https://github.com/AlUlkesh/stable-diffusion-webui-images-browser ./extensions/images-browser
git clone https://github.com/kohya-ss/sd-webui-additional-networks ./extensions/additional-networks
git clone https://github.com/yankooliveira/sd-webui-photopea-embed ./extensions/photopea-embed
git clone https://github.com/ninjaneural/video-util ./extensions/video-util

git clone https://github.com/fkunn1326/openpose-editor ./extensions/openpose-editor
git clone https://github.com/hnmr293/posex ./extensions/posex
git clone https://github.com/fishslot/video_loopback_for_webui ./extensions/video_loopback

if [ $6 == True ]; then
  mkdir ./models/sam
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth -d ./models/sam -o sam_vit_h_4b8939.pth
fi

sed -i -e "/    # TODO clone into temporary dir and move if successful/a\    return" /content/$1/modules/launch_utils.py

wget https://raw.githubusercontent.com/neuralninja22/colab/master/misc/config.json -O ./config.json
