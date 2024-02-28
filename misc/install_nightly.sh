pip install -q torch==2.1.0 torchvision==0.16.0 xformers --index-url https://download.pytorch.org/whl/cu121
pip install httpx==0.24.1

if [ $4 == True ]; then
  pip install -U openmim
  mim install mmcv>=2.0.0 -f https://download.openmmlab.com/mmcv/dist/cu118/torch2.0.0/index.html
  mim install mmdet>=3.0.0
fi

if [ $2 == "forge" ]; then
  git clone https://github.com/ninjaneural/forgeui /content/$1
else
  git clone -b $2 https://github.com/ninjaneural/colabui /content/$1
fi
cd /content/$1
rm webui*.sh

if [ $3 == True ] && [ $2 != "forge" ]; then
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
if [ $2 != "forge" ]; then
  git clone https://github.com/pkuliyi2015/multidiffusion-upscaler-for-automatic1111 ./extensions/multidiffusion-upscaler
fi
git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete ./extensions/tagcomplete
git clone https://github.com/Coyote-A/ultimate-upscale-for-automatic1111 ./extensions/ultimate-upscale

git clone https://github.com/neuralninja22/images-browser ./extensions/images-browser
git clone https://github.com/kohya-ss/sd-webui-additional-networks ./extensions/additional-networks
git clone https://github.com/picobyte/stable-diffusion-webui-wd14-tagger ./extensions/wd14-tagger
git clone https://github.com/yankooliveira/sd-webui-photopea-embed ./extensions/photopea-embed
git clone https://github.com/ninjaneural/video-util ./extensions/video-util

git clone https://github.com/fkunn1326/openpose-editor ./extensions/openpose-editor
git clone https://github.com/hnmr293/posex ./extensions/posex
git clone https://github.com/fishslot/video_loopback_for_webui ./extensions/video_loopback

if [ $2 != "v1.6.0" ] && [ $2 != "v1.7.0" ]; then
  git clone https://github.com/KohakuBlueleaf/a1111-sd-webui-lycoris ./extensions/lycoris
fi

if [ ${10} == True ]; then
  git clone https://github.com/Gourieff/sd-webui-reactor ./extensions/sd-webui-reactor
  pip install insightface==0.7.3
  pip install onnxruntime-gpu
fi

if [ $7 == True ]; then
  git clone https://github.com/Scholar01/sd-webui-mov2mov ./extensions/mov2mov
  sed -i -e "/if platform.system() == 'Windows':/if platform.system() == 'Windows' or platform.system() == 'Linux':" ./extensions/mov2mov/script/m2m_util.py
fi

if [ $8 == True ]; then
  git clone https://github.com/continue-revolution/sd-webui-animatediff ./extensions/animatediff
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v14.ckpt -d ./extensions/animatediff/model -o mm_sd_v14.ckpt
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15.ckpt -d ./extensions/animatediff/model -o mm_sd_v15.ckpt
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/guoyww/animatediff/resolve/main/mm_sd_v15_v2.ckpt -d ./extensions/animatediff/model -o mm_sd_v15_v2.ckpt
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://huggingface.co/CiaraRowles/TemporalDiff/resolve/main/temporaldiff-v1-animatediff.ckpt -d ./extensions/animatediff/model -o temporaldiff-v1-animatediff.ckpt
fi

if [ $9 == True ]; then
  git clone -b nightly https://github.com/ninjaneural/deforum ./extensions/deforum
fi

if [ $6 == True ]; then
  mkdir ./models/sam
  aria2c --console-log-level=error -c -x 16 -s 16 -k 1M https://dl.fbaipublicfiles.com/segment_anything/sam_vit_h_4b8939.pth -d ./models/sam -o sam_vit_h_4b8939.pth
fi

if [ $2 != "v1.6.0" ] && [ $2 != "v1.7.0" ]; then
  sed -i -e "/from modules import launch_utils/a\import os" /content/$1/launch.py
  sed -i -e "/        prepare_environment()/a\        os.system(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" /content/$1/repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" /content/$1/launch.py
fi

if [ $2 != "v1.6.0" ] && [ $2 != "v1.7.0" ]; then
  cd ./extensions/controlnet
  git reset --hard 3011ff6e706d3fdd0cc7d2ac8ff0d59020b8f767
  cd /content/$1
fi

if [ $2 != "v1.6.0" ] && [ $2 != "v1.7.0" ]; then
  pip install gradio-client==0.8.1
fi

wget https://raw.githubusercontent.com/neuralninja22/colab/master/misc/config.json -O ./config.json
