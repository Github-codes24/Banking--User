import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from 'react-native';

interface PinInputProps {
  length?: number; // Number of digits
  onComplete?: (pin: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  inputProps?: TextInputProps; // Extra props for inputs
}

const PinInput: React.FC<PinInputProps> = ({
  length = 4,
  onComplete,
  containerStyle,
  inputStyle,
  inputProps,
}) => {
  const [pin, setPin] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      const newPin = [...pin];
      newPin[index] = text;
      setPin(newPin);

      if (text && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newPin.every((n) => n !== '')) {
        onComplete?.(newPin.join(''));
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newPin = [...pin];

      if (newPin[index]) {
        // Clear current box first
        newPin[index] = '';
        setPin(newPin);
      } else if (index > 0) {
        // If already empty, move focus back
        inputsRef.current[index - 1]?.focus();
        const prevPin = [...pin];
        prevPin[index - 1] = '';
        setPin(prevPin);
      }
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <TextInput
            key={i}
            ref={(ref) => (inputsRef.current[i] = ref)}
            value={pin[i]}
            onChangeText={(text) => handleChange(text, i)}
            onKeyPress={(e) => handleKeyPress(e, i)}
            keyboardType="number-pad"
            maxLength={1}
            style={[styles.input, inputStyle]}
            {...inputProps}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default PinInput;