import {
  BadRequestException,
  HttpException,
  HttpStatus,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

// TODO mover para arquivo
export interface PurchasesValidationError {
  value: any;
  field: string;
  validation?: {
    [type: string]: string;
  };
  children?: PurchasesValidationError[];
}

export function makeValidationPipe(): ValidationPipe {
  return new ValidationPipe({
    transform: true,
    whitelist: true,
    exceptionFactory: (errors): HttpException => {
      function transformError(
        error: ValidationError,
      ): PurchasesValidationError {
        return {
          value: error.value,
          field: error.property,
          validation: error.constraints,
          children: error.children?.map(transformError),
        };
      }

      return new BadRequestException({
        message: 'Please check request params',
        errors: errors.map(transformError),
        statusCode: HttpStatus.BAD_REQUEST,
      });
    },
  });
}
