#include "cam_js.h"

#include <string>

#if __APPLE__
#include "cam_mac.h"
#elif _WIN32
#include "cam_win.h"
#else
#error Unsupported platform
#endif

Napi::Object CamJs::Init(Napi::Env env, Napi::Object exports) {
  Napi::Function func = DefineClass(
      env, "CamJs",
      {
       InstanceMethod("testGCD", &CamJs::TestGCD)
       });

  Napi::FunctionReference *constructor = new Napi::FunctionReference();
  *constructor = Napi::Persistent(func);
  env.SetInstanceData(constructor);

  exports.Set("CamJs", func);
  return exports;
}

CamJs::CamJs(const Napi::CallbackInfo &info)
    : Napi::ObjectWrap<CamJs>(info) {
#if __APPLE__
  threadWrapper_impl_ = std::make_unique<ThreadWrapperMac>();
#elif _WIN32
  threadWrapper_impl_ = std::make_unique<ThreadWrapperWin>();
#else
#error Unsupported platform
#endif

}

CamJs::~CamJs()
{

}

Napi::Value CamJs::TestGCD(const Napi::CallbackInfo &info) {
  Napi::Object result = Napi::Object::New(info.Env());
  uint32_t width = 0, height = 0;
  std::string err_out;

  bool init_result = threadWrapper_impl_->TestGCD(err_out);
  result.Set("result", init_result);
  result.Set("description", err_out.c_str());
  return result;
}
