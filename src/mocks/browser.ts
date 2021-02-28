/*************************
 * Copyright (C) Vinci Facilities - Primatice - All Rights Reserved.
 * SIREN: 808 461 248
 * This source code is proprietary and confidential. Unauthorized copy of its content,
 * via any medium, is strictly prohibited.
 * This source code is part of the TwinOps project, and may not be used into any
 * other projects without express authorization from Primatice.
 * The content of this file is covered by the terms described in the LICENSING file
 * located at the root of this project.
 * C2 - INTERNAL USE ONLY
 *************************/

import { setupWorker } from 'msw';

import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
