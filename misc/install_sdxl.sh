pip install -q xformers==0.0.20 triton==2.0.0 -U
git clone -b dev https://github.com/AUTOMATIC1111/stable-diffusion-webui /content/$1
cd /content/$1
sed -i -e "/from modules import launch_utils/a\import os" /content/$1/launch.py
sed -i -e "/        prepare_environment()/a\        os.system(f\\\"\"\"sed -i -e \"s/dict()))/dict())).cuda()/g\" /content/$1/repositories/stable-diffusion-stability-ai/ldm/util.py\"\"\")" /content/$1/launch.py
wget https://raw.githubusercontent.com/ninjaneural/webui/master/misc/config.json -O /content/$1/config.json
