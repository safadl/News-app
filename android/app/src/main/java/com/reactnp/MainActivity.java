package com.reactnp;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
    protected void onCreate(Bundle savedInstanceState) {
      // here    
             SplashScreen.show(this);
        super.onCreate(savedInstanceState);
      
/*
        int i;
        for(i=0;i<1000;i++){ }
          if(i>=999)
         SplashScreen.hide(this);*/
    }
  @Override
  protected String getMainComponentName() {
    return "reactnp";
  }
}
