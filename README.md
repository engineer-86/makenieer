## Docker Compose

### For local development

```bash
 docker-compose -f docker-compose.dev.yml up --build
 ```

### For deploying

```bash
 docker-compose -f docker-compose.deploy.yml up --build
 ```

# Gitlab

### Login in container registry

```bash
docker login registry.gitlab.com
```

### Build image

```bash
  docker build -t registry.gitlab.com/engineer86/makenieer .
```

### Push image

```bash
docker push registry.gitlab.com/engineer86/makenieer:v0401c
```
Dont forget the tag! --> :v0401
