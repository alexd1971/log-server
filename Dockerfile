FROM mhart/alpine-node:6
RUN mkdir /server
COPY . /server/
WORKDIR /server/
RUN mkdir /log
VOLUME ["/log/"]
RUN npm install
CMD npm start
EXPOSE 4114
