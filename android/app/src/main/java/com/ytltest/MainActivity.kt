package com.ytltest

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null) // Make sure this is `null` for react-navigation to work correctly.
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): RNGestureHandlerEnabledRootView {
                return RNGestureHandlerEnabledRootView(this@MainActivity)
            }
        }
    }

    override fun getMainComponentName(): String? {
        return "ytltest" // Replace with your app's name
    }
}
