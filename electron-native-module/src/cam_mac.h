#ifndef CAM_MAC_H_
#define CAM_MAC_H_

#include "cam.h"

#include <map>
#include <vector>
#include <string>
#include <sstream>

class ThreadWrapperMac : public ThreadWrapper {
public:
  ThreadWrapperMac();
  ~ThreadWrapperMac();

  bool TestGCD(std::string &err_out) override;

private:

};

#endif
