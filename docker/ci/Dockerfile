# This files is automatically generated.
FROM node:7

RUN wget https://yarnpkg.com/latest.tar.gz -P /tmp
RUN mkdir -p /opt/yarn
RUN tar zvxf /tmp/latest.tar.gz -C /opt/yarn
RUN mkdir /root/.ssh/

ENV PATH=$PATH:/opt/yarn/dist/bin

WORKDIR /src

ADD [".","/src"]

RUN yarn install
