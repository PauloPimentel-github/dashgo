import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChackraInputProps } from "@chakra-ui/react";
interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, error = null, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);