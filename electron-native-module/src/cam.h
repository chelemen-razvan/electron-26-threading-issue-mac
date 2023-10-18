#ifndef CAM_H_
#define CAM_H_

#include <map>
#include <list>
#include <string>
#include <vector>

class ThreadWrapper {
public:

  ThreadWrapper() = default;
  virtual ~ThreadWrapper() = default;

  virtual bool TestGCD(std::string &err_out) = 0;

};

#endif
