<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
    <a href="http://kubernetes.io/" target="blank"><img src="https://www.svgrepo.com/show/376331/kubernetes.svg" width="200" alt="Kubernetes Logo" /></a>
</p>

## Description

Hasil belajar tentang HPA ( Horizontal Pod Autoscaling ) dan liveness

## Requirement
1. Docker version 20.10.23, build 7155243
2. Kubectl atau minikube
3. kubernetes metrics <a href="https://github.com/kubernetes-sigs/metrics-server">Metric Server</a>

## Build Docker Image

```bash
# build
$ docker build -t <nama-image> .

# tagging
$ docker tag <nama-image> <user-docker>/<nama-image>

# upload to docker repository
$ docker push <user-docker>/<nama-image>
```

## Deploy to Kubernetes

```bash
# Deploy Mysql
$ kubectl apply -f mysql/deployment.yaml

# Deploy App
$ kubectl apply -f k8s/deployment.yaml
```

## How to test

ada 2 endpoint untuk test HPA dan Liveness

## Postman
export Nestjs Kubernetes.postman_collection.json

## Save User Endpoint
Payload
```
[
  {
    "username": "Deana",
    "password": 199989612276
  },
]
```
generate data dari  <a href="https://json-generator.com/">Json Generator</a> dan pake payload dibawah ini:
```
[
  '{{repeat(1, 1000)}}',
  {
    username: '{{firstName()}}',
    password: '{{integer([10], [754411111111])}}'
  }
]
```

## How To Test

### Test Liveness
```
endpoint http://localhost:3000/exit
```

### Test HPA
```bash
$ npm install loadtest
```
```
$ loadtest http://localhost:3000 -n 10000 -c 100
```

command loadtest untuk merequest ke service dengan 10K (-n) request dan 100 (-c) concurrent
