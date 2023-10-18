#ifndef CAM_JS_H_
#define CAM_JS_H_

#include <memory>
#include <napi.h>

#include "cam.h"

class CamJs : public Napi::ObjectWrap<CamJs> {
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  CamJs(const Napi::CallbackInfo &info);
  ~CamJs();

private:
  Napi::Value TestGCD(const Napi::CallbackInfo &info);

  std::unique_ptr<ThreadWrapper> threadWrapper_impl_;
};

#endif