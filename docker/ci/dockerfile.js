comment('This files is automatically generated.');
from('node:7');

run('wget https://yarnpkg.com/latest.tar.gz -P /tmp');
run('mkdir -p /opt/yarn');
run('tar zvxf /tmp/latest.tar.gz -C /opt/yarn');
run('mkdir /root/.ssh/');

env('PATH', '$PATH:/opt/yarn/dist/bin');

workdir('/src');

add('.', '/src');

run('yarn install');