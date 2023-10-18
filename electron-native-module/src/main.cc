#include <napi.h>

#include "cam_js.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return CamJs::Init(env, exports);
}

NODE_API_MODULE(cam, InitAll)
