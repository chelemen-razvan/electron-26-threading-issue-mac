#ifndef CAM_WIN_H_
#define CAM_WIN_H_

#include <map>
#include <vector>

#include "cam.h"


class ThreadWrapperWin
    : public ThreadWrapper
{

public:
  ThreadWrapperWin();
  ~ThreadWrapperWin();

  bool TestGCD(std::string &err_out) override;
};

#endif_
