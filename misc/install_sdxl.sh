pip install -q xformers==0.0.20 triton==2.0.0 -U
git clone -b v1.5.1 https://github.com/AUTOMATIC1111/stable-diffusion-webui /content/$1

if [ $2 == True ]; then
  git clone -b nightly https://github.com/ninjaneural/deforum /content/$1/extensions/deforum
  git clone https://github.com/ninjaneural/controlnet /content/$1/extensions/controlnet
fi
if [ $3 == True ]; then
  git clone https://github.com/Bing-su/adetailer /content/$1/extensions/adetailer
fi

git clone https://github.com/adieyal/sd-dynamic-prompts /content/$1/extensions/sd-dynamic-prompts
git clone https://github.com/DominikDoom/a1111-sd-webui-tagcomplete /content/$1/extensions/a1111-sd-webui-tagcomplete
git clone https://github.com/wcde/sd-webui-refiner /content/$1/extensions/sd-webui-refiner

cd /content/$1
sed -i -e "/from modules import launch_utils/a\import os" /content/$1/launch.py
sed -i -e "/        prepare_environment()/a\        os.system(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" /content/$1/repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" /content/$1/launch.py
wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/config.json -O /content/$1/config.json
