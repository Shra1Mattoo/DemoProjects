import React from "react";
import { Button, ThemeProvider } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";

const elementss = () => {
    return (
        <SafeAreaView>
            <ThemeProvider>
                <Button
                    title={'Tap Here'}
                />
            </ThemeProvider>
        </SafeAreaView>
    )
}
export default elementss;