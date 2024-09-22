#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLog.h>
#import <React/RCTView.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTDevLoadingView.h>
#import <React/RCTLog.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    NSURL *jsCodeLocation;

    #ifdef DEBUG
        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
    #else
        jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    #endif

    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"yourproject" // Replace with your app's name
                                               initialProperties:nil];

    if (@available(iOS 13.0, *)) {
        rootView.backgroundColor = [UIColor systemBackgroundColor];
    } else {
        rootView.backgroundColor = [UIColor whiteColor];
    }

    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UIViewController *rootViewController = [UIViewController new];
    rootViewController.view = rootView;
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    return YES;
}

// Optional: If you are using
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    return [RCTLinkingManager application:app openURL:url options:options];
}

@end
