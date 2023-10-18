#include "cam_mac.h"

#import <AVFoundation/AVFoundation.h>
#import <CoreMediaIO/CoreMediaIO.h>
#import <Foundation/Foundation.h>
#import <Appkit/AppKit.h>

ThreadWrapperMac::ThreadWrapperMac()
{

}


ThreadWrapperMac::~ThreadWrapperMac()
{

}

bool ThreadWrapperMac::TestGCD(std::string &err_out) {
  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 1 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
    NSLog(@"This is NOT called.");
  });

  NSLog(@"This is called.");
  err_out = "This is just a dummy response";

  return true;
}
