# pull official base image
FROM ubuntu:latest

# set working directory
WORKDIR /mediaData

RUN apt-get update && apt-get install -y --no-install-recommends python3-dev python3-pip build-essential && pip install torch==1.7.1+cpu torchvision==0.8.2+cpu -f https://download.pytorch.org/whl/torch_stable.html
# install media data dependencies
RUN pip install numpy==1.20
RUN pip install rembg

ENTRYPOINT ["rembg"]

# start media data
CMD []
