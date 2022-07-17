import { applyDecorators, Controller, Get, Post } from "@nestjs/common";
import {
    ApiBadRequestResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiTags,
    ApiUnprocessableEntityResponse,
  } from '@nestjs/swagger';
import { WalletDTO } from "../../dtos";

const RESOURCE_NAME = 'wallets';

export function walletsResource(): ClassDecorator{
    return applyDecorators(ApiTags(RESOURCE_NAME),Controller(RESOURCE_NAME));
}

export function PostWallets(): MethodDecorator{
    return applyDecorators(
        ApiCreatedResponse({
description: 'The record has been successfully created.',
type: WalletDTO,
        }),
ApiUnprocessableEntityResponse({description: 'Name already exists.'}),
ApiBadRequestResponse({ description: 'Request data is invalid'}),
Post(),
    );
}

export function GetWallets(): MethodDecorator{
    return applyDecorators(
        ApiOkResponse({
            description: 'The record has been successfully created.',
            type: WalletDTO,
        }),
        ApiBadRequestResponse({ description: 'Invalid query params'}),
        Get(),
    );
}


