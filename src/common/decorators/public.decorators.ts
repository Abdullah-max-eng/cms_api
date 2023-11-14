import { SetMetadata } from "@nestjs/common";

export const Public = (status) => SetMetadata("isPublic", status)