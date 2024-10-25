import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace sys. */
export namespace sys {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Log. */
        interface ILog {

            /** Log errors */
            errors?: (sys.protobuf.Log.IError[]|null);
        }

        /** Represents a Log. */
        class Log implements ILog {

            /**
             * Constructs a new Log.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.ILog);

            /** Log errors. */
            public errors: sys.protobuf.Log.IError[];

            /**
             * Creates a new Log instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Log instance
             */
            public static create(properties?: sys.protobuf.ILog): sys.protobuf.Log;

            /**
             * Encodes the specified Log message. Does not implicitly {@link sys.protobuf.Log.verify|verify} messages.
             * @param message Log message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Log message, length delimited. Does not implicitly {@link sys.protobuf.Log.verify|verify} messages.
             * @param message Log message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Log message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Log;

            /**
             * Decodes a Log message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Log;

            /**
             * Verifies a Log message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Log message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Log
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Log;

            /**
             * Creates a plain object from a Log message. Also converts values to other types if specified.
             * @param message Log
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Log, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Log to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Log
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Log {

            /** Properties of an Error. */
            interface IError {

                /** Error timestamp */
                timestamp: number;

                /** Error code */
                code: number;
            }

            /** Represents an Error. */
            class Error implements IError {

                /**
                 * Constructs a new Error.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sys.protobuf.Log.IError);

                /** Error timestamp. */
                public timestamp: number;

                /** Error code. */
                public code: number;

                /**
                 * Creates a new Error instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Error instance
                 */
                public static create(properties?: sys.protobuf.Log.IError): sys.protobuf.Log.Error;

                /**
                 * Encodes the specified Error message. Does not implicitly {@link sys.protobuf.Log.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sys.protobuf.Log.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link sys.protobuf.Log.Error.verify|verify} messages.
                 * @param message Error message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sys.protobuf.Log.IError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Log.Error;

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Log.Error;

                /**
                 * Verifies an Error message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Error
                 */
                public static fromObject(object: { [k: string]: any }): sys.protobuf.Log.Error;

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @param message Error
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sys.protobuf.Log.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Error to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Error
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a BanaCoinPaymentLog. */
        interface IBanaCoinPaymentLog {

            /** BanaCoinPaymentLog payments */
            payments?: (sys.protobuf.BanaCoinPaymentLog.IPayment[]|null);
        }

        /** Represents a BanaCoinPaymentLog. */
        class BanaCoinPaymentLog implements IBanaCoinPaymentLog {

            /**
             * Constructs a new BanaCoinPaymentLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IBanaCoinPaymentLog);

            /** BanaCoinPaymentLog payments. */
            public payments: sys.protobuf.BanaCoinPaymentLog.IPayment[];

            /**
             * Creates a new BanaCoinPaymentLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BanaCoinPaymentLog instance
             */
            public static create(properties?: sys.protobuf.IBanaCoinPaymentLog): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Encodes the specified BanaCoinPaymentLog message. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.verify|verify} messages.
             * @param message BanaCoinPaymentLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IBanaCoinPaymentLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BanaCoinPaymentLog message, length delimited. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.verify|verify} messages.
             * @param message BanaCoinPaymentLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IBanaCoinPaymentLog, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BanaCoinPaymentLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BanaCoinPaymentLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Decodes a BanaCoinPaymentLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BanaCoinPaymentLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Verifies a BanaCoinPaymentLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BanaCoinPaymentLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BanaCoinPaymentLog
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.BanaCoinPaymentLog;

            /**
             * Creates a plain object from a BanaCoinPaymentLog message. Also converts values to other types if specified.
             * @param message BanaCoinPaymentLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.BanaCoinPaymentLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BanaCoinPaymentLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BanaCoinPaymentLog
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BanaCoinPaymentLog {

            /** Properties of a Payment. */
            interface IPayment {

                /** Payment date */
                date: number;

                /** Payment contactNumber */
                contactNumber?: (string|null);

                /** Payment state */
                state: sys.protobuf.BanaCoinPaymentState;

                /** Payment cost */
                cost?: (number|null);

                /** Payment accessCode */
                accessCode: string;

                /** Payment personId */
                personId: string;
            }

            /** Represents a Payment. */
            class Payment implements IPayment {

                /**
                 * Constructs a new Payment.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: sys.protobuf.BanaCoinPaymentLog.IPayment);

                /** Payment date. */
                public date: number;

                /** Payment contactNumber. */
                public contactNumber: string;

                /** Payment state. */
                public state: sys.protobuf.BanaCoinPaymentState;

                /** Payment cost. */
                public cost: number;

                /** Payment accessCode. */
                public accessCode: string;

                /** Payment personId. */
                public personId: string;

                /**
                 * Creates a new Payment instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Payment instance
                 */
                public static create(properties?: sys.protobuf.BanaCoinPaymentLog.IPayment): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Encodes the specified Payment message. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: sys.protobuf.BanaCoinPaymentLog.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Payment message, length delimited. Does not implicitly {@link sys.protobuf.BanaCoinPaymentLog.Payment.verify|verify} messages.
                 * @param message Payment message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: sys.protobuf.BanaCoinPaymentLog.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Payment message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Decodes a Payment message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Payment
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Verifies a Payment message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Payment message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Payment
                 */
                public static fromObject(object: { [k: string]: any }): sys.protobuf.BanaCoinPaymentLog.Payment;

                /**
                 * Creates a plain object from a Payment message. Also converts values to other types if specified.
                 * @param message Payment
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: sys.protobuf.BanaCoinPaymentLog.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Payment to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Payment
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation authorizationAt */
            authorizationAt?: (number|null);

            /** Operation featureVersion */
            featureVersion?: (wm5.protobuf.IGameFeatureVersion|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IOperation);

            /** Operation authorizationAt. */
            public authorizationAt: number;

            /** Operation featureVersion. */
            public featureVersion?: (wm5.protobuf.IGameFeatureVersion|null);

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: sys.protobuf.IOperation): sys.protobuf.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link sys.protobuf.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link sys.protobuf.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Operation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status state */
            state: sys.protobuf.State;

            /** Status name */
            name?: (string|null);

            /** Status address */
            address?: (number|null);

            /** Status value */
            value?: (number|null);

            /** Status value2 */
            value2?: (number|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IStatus);

            /** Status state. */
            public state: sys.protobuf.State;

            /** Status name. */
            public name: string;

            /** Status address. */
            public address: number;

            /** Status value. */
            public value: number;

            /** Status value2. */
            public value2: number;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: sys.protobuf.IStatus): sys.protobuf.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link sys.protobuf.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Command. */
        interface ICommand {

            /** Command sequence */
            sequence?: (number|null);

            /** Command ntp */
            ntp?: (string|null);

            /** Command checkCable */
            checkCable?: (string|null);

            /** Command renewDhcp */
            renewDhcp?: (string|null);

            /** Command setDate */
            setDate?: (number|null);

            /** Command syncDate */
            syncDate?: (string|null);

            /** Command ping */
            ping?: (number[]|null);

            /** Command traceRoute */
            traceRoute?: (number|null);

            /** Command checkPacket */
            checkPacket?: (string|null);

            /** Command reboot */
            reboot?: (string|null);

            /** Command checkPkg */
            checkPkg?: (string|null);
        }

        /** Represents a Command. */
        class Command implements ICommand {

            /**
             * Constructs a new Command.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.ICommand);

            /** Command sequence. */
            public sequence: number;

            /** Command ntp. */
            public ntp: string;

            /** Command checkCable. */
            public checkCable: string;

            /** Command renewDhcp. */
            public renewDhcp: string;

            /** Command setDate. */
            public setDate: number;

            /** Command syncDate. */
            public syncDate: string;

            /** Command ping. */
            public ping: number[];

            /** Command traceRoute. */
            public traceRoute: number;

            /** Command checkPacket. */
            public checkPacket: string;

            /** Command reboot. */
            public reboot: string;

            /** Command checkPkg. */
            public checkPkg: string;

            /**
             * Creates a new Command instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Command instance
             */
            public static create(properties?: sys.protobuf.ICommand): sys.protobuf.Command;

            /**
             * Encodes the specified Command message. Does not implicitly {@link sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link sys.protobuf.Command.verify|verify} messages.
             * @param message Command message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Command message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Command;

            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Command;

            /**
             * Verifies a Command message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Command
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Command;

            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @param message Command
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Command to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Command
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Reply. */
        interface IReply {

            /** Reply sequence */
            sequence?: (number|null);

            /** Reply ntp */
            ntp?: (sys.protobuf.IStatus|null);

            /** Reply checkCable */
            checkCable?: (sys.protobuf.IStatus|null);

            /** Reply renewDhcp */
            renewDhcp?: (sys.protobuf.IStatus|null);

            /** Reply setDate */
            setDate?: (sys.protobuf.IStatus|null);

            /** Reply syncDate */
            syncDate?: (sys.protobuf.IStatus|null);

            /** Reply ping */
            ping?: (sys.protobuf.IStatus[]|null);

            /** Reply traceRoute */
            traceRoute?: (sys.protobuf.IStatus|null);

            /** Reply checkPacket */
            checkPacket?: (sys.protobuf.IStatus|null);

            /** Reply reboot */
            reboot?: (sys.protobuf.IStatus|null);

            /** Reply checkPkg */
            checkPkg?: (sys.protobuf.IStatus|null);
        }

        /** Represents a Reply. */
        class Reply implements IReply {

            /**
             * Constructs a new Reply.
             * @param [properties] Properties to set
             */
            constructor(properties?: sys.protobuf.IReply);

            /** Reply sequence. */
            public sequence: number;

            /** Reply ntp. */
            public ntp?: (sys.protobuf.IStatus|null);

            /** Reply checkCable. */
            public checkCable?: (sys.protobuf.IStatus|null);

            /** Reply renewDhcp. */
            public renewDhcp?: (sys.protobuf.IStatus|null);

            /** Reply setDate. */
            public setDate?: (sys.protobuf.IStatus|null);

            /** Reply syncDate. */
            public syncDate?: (sys.protobuf.IStatus|null);

            /** Reply ping. */
            public ping: sys.protobuf.IStatus[];

            /** Reply traceRoute. */
            public traceRoute?: (sys.protobuf.IStatus|null);

            /** Reply checkPacket. */
            public checkPacket?: (sys.protobuf.IStatus|null);

            /** Reply reboot. */
            public reboot?: (sys.protobuf.IStatus|null);

            /** Reply checkPkg. */
            public checkPkg?: (sys.protobuf.IStatus|null);

            /**
             * Creates a new Reply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Reply instance
             */
            public static create(properties?: sys.protobuf.IReply): sys.protobuf.Reply;

            /**
             * Encodes the specified Reply message. Does not implicitly {@link sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link sys.protobuf.Reply.verify|verify} messages.
             * @param message Reply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: sys.protobuf.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sys.protobuf.Reply;

            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sys.protobuf.Reply;

            /**
             * Verifies a Reply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Reply
             */
            public static fromObject(object: { [k: string]: any }): sys.protobuf.Reply;

            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @param message Reply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: sys.protobuf.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Reply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Reply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** State enum. */
        enum State {
            State_None = 0,
            State_Checking = 1,
            State_NG = 2,
            State_OK = 3
        }

        /** BanaCoinPaymentState enum. */
        enum BanaCoinPaymentState {
            BC_SUCCESS = 0,
            BC_SHORTAGE = 1,
            BC_BNID_MEMBER_ERROR = 2,
            BC_UNKNOWN_ERROR = 3,
            BC_BNID_SYSTEM_ERROR = 4,
            BC_BNID_VERIFY_ERROR = 5,
            BC_BNID_EXECUTE_ERROR = 6,
            BC_BNID_SERVER_UNAVAILABLE = 99
        }
    }
}

/** Namespace wm5. */
export namespace wm5 {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a RegisterSystemInfoRequest. */
        interface IRegisterSystemInfoRequest {

            /** RegisterSystemInfoRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType */
            terminalType: wm5.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion */
            romVersion: number;

            /** RegisterSystemInfoRequest country */
            country: string;

            /** RegisterSystemInfoRequest lineType */
            lineType: wm5.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName */
            shopName: string;

            /** RegisterSystemInfoRequest shopNickname */
            shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId */
            allnetPlaceId?: (number|null);

            /** RegisterSystemInfoRequest allnetRegion0 */
            allnetRegion0?: (number|null);

            /** RegisterSystemInfoRequest muchaPlaceId */
            muchaPlaceId?: (string|null);

            /** RegisterSystemInfoRequest muchaPrefectureId */
            muchaPrefectureId?: (number|null);

            /** RegisterSystemInfoRequest regionName0 */
            regionName0: string;

            /** RegisterSystemInfoRequest regionName1 */
            regionName1: string;

            /** RegisterSystemInfoRequest regionName2 */
            regionName2: string;

            /** RegisterSystemInfoRequest regionName3 */
            regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset */
            timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting */
            systemSetting: wm5.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs */
            errorLogs?: (wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[]|null);
        }

        /** Represents a RegisterSystemInfoRequest. */
        class RegisterSystemInfoRequest implements IRegisterSystemInfoRequest {

            /**
             * Constructs a new RegisterSystemInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterSystemInfoRequest);

            /** RegisterSystemInfoRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemInfoRequest terminalType. */
            public terminalType: wm5.protobuf.TerminalType;

            /** RegisterSystemInfoRequest romVersion. */
            public romVersion: number;

            /** RegisterSystemInfoRequest country. */
            public country: string;

            /** RegisterSystemInfoRequest lineType. */
            public lineType: wm5.protobuf.LineType;

            /** RegisterSystemInfoRequest shopName. */
            public shopName: string;

            /** RegisterSystemInfoRequest shopNickname. */
            public shopNickname: string;

            /** RegisterSystemInfoRequest allnetPlaceId. */
            public allnetPlaceId: number;

            /** RegisterSystemInfoRequest allnetRegion0. */
            public allnetRegion0: number;

            /** RegisterSystemInfoRequest muchaPlaceId. */
            public muchaPlaceId: string;

            /** RegisterSystemInfoRequest muchaPrefectureId. */
            public muchaPrefectureId: number;

            /** RegisterSystemInfoRequest regionName0. */
            public regionName0: string;

            /** RegisterSystemInfoRequest regionName1. */
            public regionName1: string;

            /** RegisterSystemInfoRequest regionName2. */
            public regionName2: string;

            /** RegisterSystemInfoRequest regionName3. */
            public regionName3: string;

            /** RegisterSystemInfoRequest timezoneOffset. */
            public timezoneOffset: number;

            /** RegisterSystemInfoRequest systemSetting. */
            public systemSetting: wm5.protobuf.ISystemSetting;

            /** RegisterSystemInfoRequest errorLogs. */
            public errorLogs: wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry[];

            /**
             * Creates a new RegisterSystemInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoRequest instance
             */
            public static create(properties?: wm5.protobuf.IRegisterSystemInfoRequest): wm5.protobuf.RegisterSystemInfoRequest;

            /**
             * Encodes the specified RegisterSystemInfoRequest message. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoRequest.verify|verify} messages.
             * @param message RegisterSystemInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterSystemInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemInfoRequest;

            /**
             * Decodes a RegisterSystemInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemInfoRequest;

            /**
             * Verifies a RegisterSystemInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemInfoRequest;

            /**
             * Creates a plain object from a RegisterSystemInfoRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterSystemInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemInfoRequest {

            /** Properties of an ErrorLogEntry. */
            interface IErrorLogEntry {

                /** ErrorLogEntry datetime */
                datetime: number;

                /** ErrorLogEntry message */
                message: string;
            }

            /** Represents an ErrorLogEntry. */
            class ErrorLogEntry implements IErrorLogEntry {

                /**
                 * Constructs a new ErrorLogEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry);

                /** ErrorLogEntry datetime. */
                public datetime: number;

                /** ErrorLogEntry message. */
                public message: string;

                /**
                 * Creates a new ErrorLogEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ErrorLogEntry instance
                 */
                public static create(properties?: wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry): wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Encodes the specified ErrorLogEntry message. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ErrorLogEntry message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry.verify|verify} messages.
                 * @param message ErrorLogEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.RegisterSystemInfoRequest.IErrorLogEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Decodes an ErrorLogEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ErrorLogEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Verifies an ErrorLogEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ErrorLogEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ErrorLogEntry
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry;

                /**
                 * Creates a plain object from an ErrorLogEntry message. Also converts values to other types if specified.
                 * @param message ErrorLogEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.RegisterSystemInfoRequest.ErrorLogEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ErrorLogEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ErrorLogEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemInfoResponse. */
        interface IRegisterSystemInfoResponse {

            /** RegisterSystemInfoResponse error */
            error: wm5.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId */
            regionId: number;

            /** RegisterSystemInfoResponse placeId */
            placeId: string;

            /** RegisterSystemInfoResponse teamSuspensionAnnouncementStartAt */
            teamSuspensionAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse teamSuspensionStartAt */
            teamSuspensionStartAt: number;

            /** RegisterSystemInfoResponse faceRecognitionPermitted */
            faceRecognitionPermitted: boolean;

            /** RegisterSystemInfoResponse sendingReportPermitted */
            sendingReportPermitted: boolean;

            /** RegisterSystemInfoResponse ctrItemRestricted */
            ctrItemRestricted: boolean;

            /** RegisterSystemInfoResponse featureVersion */
            featureVersion: wm5.protobuf.IGameFeatureVersion;

            /** RegisterSystemInfoResponse latestCompetitionId */
            latestCompetitionId?: (number|null);

            /** RegisterSystemInfoResponse competitionSchedule */
            competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);

            /** RegisterSystemInfoResponse specialGhostSchedule */
            specialGhostSchedule?: (wm5.protobuf.ISpecialGhostSchedule|null);

            /** RegisterSystemInfoResponse bingoSchedule */
            bingoSchedule?: (wm5.protobuf.IBingoSchedule|null);

            /** RegisterSystemInfoResponse bingoEventWasHeld */
            bingoEventWasHeld?: (boolean|null);

            /** RegisterSystemInfoResponse carCampaignSchedule */
            carCampaignSchedule?: (wm5.protobuf.ICarCampaignSchedule|null);

            /** RegisterSystemInfoResponse bnidServerAvailable */
            bnidServerAvailable?: (boolean|null);

            /** RegisterSystemInfoResponse banacoinAvailable */
            banacoinAvailable?: (boolean|null);

            /** RegisterSystemInfoResponse banacoinAffiliatedPlace */
            banacoinAffiliatedPlace?: (boolean|null);

            /** RegisterSystemInfoResponse scratchAvailable */
            scratchAvailable?: (boolean|null);

            /** RegisterSystemInfoResponse displayOfScratchTerms */
            displayOfScratchTerms?: (boolean|null);

            /** RegisterSystemInfoResponse scratchNotes */
            scratchNotes?: (string|null);

            /** RegisterSystemInfoResponse scratchTerms */
            scratchTerms?: (string|null);
        }

        /** Represents a RegisterSystemInfoResponse. */
        class RegisterSystemInfoResponse implements IRegisterSystemInfoResponse {

            /**
             * Constructs a new RegisterSystemInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterSystemInfoResponse);

            /** RegisterSystemInfoResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** RegisterSystemInfoResponse regionId. */
            public regionId: number;

            /** RegisterSystemInfoResponse placeId. */
            public placeId: string;

            /** RegisterSystemInfoResponse teamSuspensionAnnouncementStartAt. */
            public teamSuspensionAnnouncementStartAt: number;

            /** RegisterSystemInfoResponse teamSuspensionStartAt. */
            public teamSuspensionStartAt: number;

            /** RegisterSystemInfoResponse faceRecognitionPermitted. */
            public faceRecognitionPermitted: boolean;

            /** RegisterSystemInfoResponse sendingReportPermitted. */
            public sendingReportPermitted: boolean;

            /** RegisterSystemInfoResponse ctrItemRestricted. */
            public ctrItemRestricted: boolean;

            /** RegisterSystemInfoResponse featureVersion. */
            public featureVersion: wm5.protobuf.IGameFeatureVersion;

            /** RegisterSystemInfoResponse latestCompetitionId. */
            public latestCompetitionId: number;

            /** RegisterSystemInfoResponse competitionSchedule. */
            public competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);

            /** RegisterSystemInfoResponse specialGhostSchedule. */
            public specialGhostSchedule?: (wm5.protobuf.ISpecialGhostSchedule|null);

            /** RegisterSystemInfoResponse bingoSchedule. */
            public bingoSchedule?: (wm5.protobuf.IBingoSchedule|null);

            /** RegisterSystemInfoResponse bingoEventWasHeld. */
            public bingoEventWasHeld: boolean;

            /** RegisterSystemInfoResponse carCampaignSchedule. */
            public carCampaignSchedule?: (wm5.protobuf.ICarCampaignSchedule|null);

            /** RegisterSystemInfoResponse bnidServerAvailable. */
            public bnidServerAvailable: boolean;

            /** RegisterSystemInfoResponse banacoinAvailable. */
            public banacoinAvailable: boolean;

            /** RegisterSystemInfoResponse banacoinAffiliatedPlace. */
            public banacoinAffiliatedPlace: boolean;

            /** RegisterSystemInfoResponse scratchAvailable. */
            public scratchAvailable: boolean;

            /** RegisterSystemInfoResponse displayOfScratchTerms. */
            public displayOfScratchTerms: boolean;

            /** RegisterSystemInfoResponse scratchNotes. */
            public scratchNotes: string;

            /** RegisterSystemInfoResponse scratchTerms. */
            public scratchTerms: string;

            /**
             * Creates a new RegisterSystemInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemInfoResponse instance
             */
            public static create(properties?: wm5.protobuf.IRegisterSystemInfoResponse): wm5.protobuf.RegisterSystemInfoResponse;

            /**
             * Encodes the specified RegisterSystemInfoResponse message. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemInfoResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemInfoResponse.verify|verify} messages.
             * @param message RegisterSystemInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterSystemInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemInfoResponse;

            /**
             * Decodes a RegisterSystemInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemInfoResponse;

            /**
             * Verifies a RegisterSystemInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemInfoResponse;

            /**
             * Creates a plain object from a RegisterSystemInfoResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterSystemInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterSystemStatsRequest. */
        interface IRegisterSystemStatsRequest {

            /** RegisterSystemStatsRequest pcbSerial */
            pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats */
            driveStats?: (wm5.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats */
            terminalStats?: (wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);
        }

        /** Represents a RegisterSystemStatsRequest. */
        class RegisterSystemStatsRequest implements IRegisterSystemStatsRequest {

            /**
             * Constructs a new RegisterSystemStatsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterSystemStatsRequest);

            /** RegisterSystemStatsRequest pcbSerial. */
            public pcbSerial: string;

            /** RegisterSystemStatsRequest driveStats. */
            public driveStats?: (wm5.protobuf.RegisterSystemStatsRequest.IDriveStats|null);

            /** RegisterSystemStatsRequest terminalStats. */
            public terminalStats?: (wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats|null);

            /**
             * Creates a new RegisterSystemStatsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsRequest instance
             */
            public static create(properties?: wm5.protobuf.IRegisterSystemStatsRequest): wm5.protobuf.RegisterSystemStatsRequest;

            /**
             * Encodes the specified RegisterSystemStatsRequest message. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.verify|verify} messages.
             * @param message RegisterSystemStatsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterSystemStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemStatsRequest;

            /**
             * Decodes a RegisterSystemStatsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemStatsRequest;

            /**
             * Verifies a RegisterSystemStatsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemStatsRequest;

            /**
             * Creates a plain object from a RegisterSystemStatsRequest message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterSystemStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace RegisterSystemStatsRequest {

            /** Properties of a DriveStats. */
            interface IDriveStats {

                /** DriveStats operation */
                operation?: (number[]|null);

                /** DriveStats story */
                story?: (number[]|null);

                /** DriveStats versus */
                versus?: (number[]|null);

                /** DriveStats ghost */
                ghost?: (number[]|null);

                /** DriveStats timeAttack */
                timeAttack?: (number[]|null);

                /** DriveStats event */
                event?: (number[]|null);

                /** DriveStats ghostSelection */
                ghostSelection?: (number[]|null);
            }

            /** Represents a DriveStats. */
            class DriveStats implements IDriveStats {

                /**
                 * Constructs a new DriveStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.RegisterSystemStatsRequest.IDriveStats);

                /** DriveStats operation. */
                public operation: number[];

                /** DriveStats story. */
                public story: number[];

                /** DriveStats versus. */
                public versus: number[];

                /** DriveStats ghost. */
                public ghost: number[];

                /** DriveStats timeAttack. */
                public timeAttack: number[];

                /** DriveStats event. */
                public event: number[];

                /** DriveStats ghostSelection. */
                public ghostSelection: number[];

                /**
                 * Creates a new DriveStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DriveStats instance
                 */
                public static create(properties?: wm5.protobuf.RegisterSystemStatsRequest.IDriveStats): wm5.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Encodes the specified DriveStats message. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DriveStats message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.DriveStats.verify|verify} messages.
                 * @param message DriveStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.RegisterSystemStatsRequest.IDriveStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Decodes a DriveStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DriveStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Verifies a DriveStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DriveStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DriveStats
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemStatsRequest.DriveStats;

                /**
                 * Creates a plain object from a DriveStats message. Also converts values to other types if specified.
                 * @param message DriveStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.RegisterSystemStatsRequest.DriveStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DriveStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for DriveStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalStats. */
            interface ITerminalStats {

                /** TerminalStats operation */
                operation?: (number[]|null);
            }

            /** Represents a TerminalStats. */
            class TerminalStats implements ITerminalStats {

                /**
                 * Constructs a new TerminalStats.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats);

                /** TerminalStats operation. */
                public operation: number[];

                /**
                 * Creates a new TerminalStats instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalStats instance
                 */
                public static create(properties?: wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats): wm5.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Encodes the specified TerminalStats message. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalStats message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsRequest.TerminalStats.verify|verify} messages.
                 * @param message TerminalStats message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.RegisterSystemStatsRequest.ITerminalStats, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Decodes a TerminalStats message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalStats
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Verifies a TerminalStats message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalStats message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalStats
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemStatsRequest.TerminalStats;

                /**
                 * Creates a plain object from a TerminalStats message. Also converts values to other types if specified.
                 * @param message TerminalStats
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.RegisterSystemStatsRequest.TerminalStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalStats to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalStats
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a RegisterSystemStatsResponse. */
        interface IRegisterSystemStatsResponse {

            /** RegisterSystemStatsResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a RegisterSystemStatsResponse. */
        class RegisterSystemStatsResponse implements IRegisterSystemStatsResponse {

            /**
             * Constructs a new RegisterSystemStatsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterSystemStatsResponse);

            /** RegisterSystemStatsResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new RegisterSystemStatsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterSystemStatsResponse instance
             */
            public static create(properties?: wm5.protobuf.IRegisterSystemStatsResponse): wm5.protobuf.RegisterSystemStatsResponse;

            /**
             * Encodes the specified RegisterSystemStatsResponse message. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterSystemStatsResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterSystemStatsResponse.verify|verify} messages.
             * @param message RegisterSystemStatsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterSystemStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterSystemStatsResponse;

            /**
             * Decodes a RegisterSystemStatsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterSystemStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterSystemStatsResponse;

            /**
             * Verifies a RegisterSystemStatsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterSystemStatsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterSystemStatsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterSystemStatsResponse;

            /**
             * Creates a plain object from a RegisterSystemStatsResponse message. Also converts values to other types if specified.
             * @param message RegisterSystemStatsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterSystemStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterSystemStatsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterSystemStatsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailRequest. */
        interface IRegisterGhostTrailRequest {

            /** RegisterGhostTrailRequest ghostSessionId */
            ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost */
            ghost: wm5.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail */
            trail: Uint8Array;
        }

        /** Represents a RegisterGhostTrailRequest. */
        class RegisterGhostTrailRequest implements IRegisterGhostTrailRequest {

            /**
             * Constructs a new RegisterGhostTrailRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterGhostTrailRequest);

            /** RegisterGhostTrailRequest ghostSessionId. */
            public ghostSessionId: (number|Long);

            /** RegisterGhostTrailRequest ghost. */
            public ghost: wm5.protobuf.IGhostCar;

            /** RegisterGhostTrailRequest trail. */
            public trail: Uint8Array;

            /**
             * Creates a new RegisterGhostTrailRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailRequest instance
             */
            public static create(properties?: wm5.protobuf.IRegisterGhostTrailRequest): wm5.protobuf.RegisterGhostTrailRequest;

            /**
             * Encodes the specified RegisterGhostTrailRequest message. Does not implicitly {@link wm5.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterGhostTrailRequest.verify|verify} messages.
             * @param message RegisterGhostTrailRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterGhostTrailRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterGhostTrailRequest;

            /**
             * Decodes a RegisterGhostTrailRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterGhostTrailRequest;

            /**
             * Verifies a RegisterGhostTrailRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterGhostTrailRequest;

            /**
             * Creates a plain object from a RegisterGhostTrailRequest message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterGhostTrailRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterGhostTrailResponse. */
        interface IRegisterGhostTrailResponse {

            /** RegisterGhostTrailResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a RegisterGhostTrailResponse. */
        class RegisterGhostTrailResponse implements IRegisterGhostTrailResponse {

            /**
             * Constructs a new RegisterGhostTrailResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterGhostTrailResponse);

            /** RegisterGhostTrailResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new RegisterGhostTrailResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterGhostTrailResponse instance
             */
            public static create(properties?: wm5.protobuf.IRegisterGhostTrailResponse): wm5.protobuf.RegisterGhostTrailResponse;

            /**
             * Encodes the specified RegisterGhostTrailResponse message. Does not implicitly {@link wm5.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterGhostTrailResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterGhostTrailResponse.verify|verify} messages.
             * @param message RegisterGhostTrailResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterGhostTrailResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterGhostTrailResponse;

            /**
             * Decodes a RegisterGhostTrailResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterGhostTrailResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterGhostTrailResponse;

            /**
             * Verifies a RegisterGhostTrailResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterGhostTrailResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterGhostTrailResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterGhostTrailResponse;

            /**
             * Creates a plain object from a RegisterGhostTrailResponse message. Also converts values to other types if specified.
             * @param message RegisterGhostTrailResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterGhostTrailResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterGhostTrailResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterGhostTrailResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserRequest. */
        interface ILoadUserRequest {

            /** LoadUserRequest cardChipId */
            cardChipId?: (string|null);

            /** LoadUserRequest accessCode */
            accessCode?: (string|null);

            /** LoadUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** LoadUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** LoadUserRequest device */
            device?: (wm5.protobuf.DeviceType|null);

            /** LoadUserRequest userId */
            userId?: (number|null);

            /** LoadUserRequest romVersion */
            romVersion: number;

            /** LoadUserRequest maxCars */
            maxCars: number;

            /** LoadUserRequest createUser */
            createUser?: (boolean|null);

            /** LoadUserRequest requireBnidUser */
            requireBnidUser?: (boolean|null);
        }

        /** Represents a LoadUserRequest. */
        class LoadUserRequest implements ILoadUserRequest {

            /**
             * Constructs a new LoadUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadUserRequest);

            /** LoadUserRequest cardChipId. */
            public cardChipId: string;

            /** LoadUserRequest accessCode. */
            public accessCode: string;

            /** LoadUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** LoadUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** LoadUserRequest device. */
            public device: wm5.protobuf.DeviceType;

            /** LoadUserRequest userId. */
            public userId: number;

            /** LoadUserRequest romVersion. */
            public romVersion: number;

            /** LoadUserRequest maxCars. */
            public maxCars: number;

            /** LoadUserRequest createUser. */
            public createUser: boolean;

            /** LoadUserRequest requireBnidUser. */
            public requireBnidUser: boolean;

            /**
             * Creates a new LoadUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadUserRequest): wm5.protobuf.LoadUserRequest;

            /**
             * Encodes the specified LoadUserRequest message. Does not implicitly {@link wm5.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadUserRequest.verify|verify} messages.
             * @param message LoadUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadUserRequest;

            /**
             * Decodes a LoadUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadUserRequest;

            /**
             * Verifies a LoadUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadUserRequest;

            /**
             * Creates a plain object from a LoadUserRequest message. Also converts values to other types if specified.
             * @param message LoadUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadUserResponse. */
        interface ILoadUserResponse {

            /** LoadUserResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt */
            unlockAt?: (number|null);

            /** LoadUserResponse accessCode */
            accessCode?: (string|null);

            /** LoadUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** LoadUserResponse personId */
            personId?: (string|null);

            /** LoadUserResponse bnidLevel */
            bnidLevel?: (number|null);

            /** LoadUserResponse userId */
            userId?: (number|null);

            /** LoadUserResponse maxiGold */
            maxiGold: number;

            /** LoadUserResponse totalMaxiGold */
            totalMaxiGold: number;

            /** LoadUserResponse numOfOwnedCars */
            numOfOwnedCars: number;

            /** LoadUserResponse cars */
            cars?: (wm5.protobuf.ICar[]|null);

            /** LoadUserResponse carStates */
            carStates?: (wm5.protobuf.LoadUserResponse.ICarState[]|null);

            /** LoadUserResponse carCoupon */
            carCoupon: wm5.protobuf.CarCreationCoupon;

            /** LoadUserResponse hp600Count */
            hp600Count: number;

            /** LoadUserResponse tutorials */
            tutorials: number;

            /** LoadUserResponse carCampaignUserState */
            carCampaignUserState?: (wm5.protobuf.CarCampaignUserState|null);

            /** LoadUserResponse competitionUserState */
            competitionUserState?: (wm5.protobuf.GhostCompetitionParticipantState|null);

            /** LoadUserResponse teamId */
            teamId?: (number|null);

            /** LoadUserResponse teamName */
            teamName?: (string|null);

            /** LoadUserResponse teamStickerFont */
            teamStickerFont?: (number|null);

            /** LoadUserResponse membership */
            membership: wm5.protobuf.WebsiteMembership;

            /** LoadUserResponse transferState */
            transferState: wm5.protobuf.TransferState;

            /** LoadUserResponse sessionId */
            sessionId?: (string|null);

            /** LoadUserResponse banacoinAvailable */
            banacoinAvailable?: (boolean|null);

            /** LoadUserResponse totalVsStarCount */
            totalVsStarCount?: (number|null);

            /** LoadUserResponse totalVsMedalPoint */
            totalVsMedalPoint?: (number|null);
        }

        /** Represents a LoadUserResponse. */
        class LoadUserResponse implements ILoadUserResponse {

            /**
             * Constructs a new LoadUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadUserResponse);

            /** LoadUserResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadUserResponse unlockAt. */
            public unlockAt: number;

            /** LoadUserResponse accessCode. */
            public accessCode: string;

            /** LoadUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** LoadUserResponse personId. */
            public personId: string;

            /** LoadUserResponse bnidLevel. */
            public bnidLevel: number;

            /** LoadUserResponse userId. */
            public userId: number;

            /** LoadUserResponse maxiGold. */
            public maxiGold: number;

            /** LoadUserResponse totalMaxiGold. */
            public totalMaxiGold: number;

            /** LoadUserResponse numOfOwnedCars. */
            public numOfOwnedCars: number;

            /** LoadUserResponse cars. */
            public cars: wm5.protobuf.ICar[];

            /** LoadUserResponse carStates. */
            public carStates: wm5.protobuf.LoadUserResponse.ICarState[];

            /** LoadUserResponse carCoupon. */
            public carCoupon: wm5.protobuf.CarCreationCoupon;

            /** LoadUserResponse hp600Count. */
            public hp600Count: number;

            /** LoadUserResponse tutorials. */
            public tutorials: number;

            /** LoadUserResponse carCampaignUserState. */
            public carCampaignUserState: wm5.protobuf.CarCampaignUserState;

            /** LoadUserResponse competitionUserState. */
            public competitionUserState: wm5.protobuf.GhostCompetitionParticipantState;

            /** LoadUserResponse teamId. */
            public teamId: number;

            /** LoadUserResponse teamName. */
            public teamName: string;

            /** LoadUserResponse teamStickerFont. */
            public teamStickerFont: number;

            /** LoadUserResponse membership. */
            public membership: wm5.protobuf.WebsiteMembership;

            /** LoadUserResponse transferState. */
            public transferState: wm5.protobuf.TransferState;

            /** LoadUserResponse sessionId. */
            public sessionId: string;

            /** LoadUserResponse banacoinAvailable. */
            public banacoinAvailable: boolean;

            /** LoadUserResponse totalVsStarCount. */
            public totalVsStarCount: number;

            /** LoadUserResponse totalVsMedalPoint. */
            public totalVsMedalPoint: number;

            /**
             * Creates a new LoadUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadUserResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadUserResponse): wm5.protobuf.LoadUserResponse;

            /**
             * Encodes the specified LoadUserResponse message. Does not implicitly {@link wm5.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadUserResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadUserResponse.verify|verify} messages.
             * @param message LoadUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadUserResponse;

            /**
             * Decodes a LoadUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadUserResponse;

            /**
             * Verifies a LoadUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadUserResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadUserResponse;

            /**
             * Creates a plain object from a LoadUserResponse message. Also converts values to other types if specified.
             * @param message LoadUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadUserResponse {

            /** Properties of a CarState. */
            interface ICarState {

                /** CarState hasOpponentGhost */
                hasOpponentGhost: boolean;

                /** CarState competitionState */
                competitionState?: (wm5.protobuf.GhostCompetitionParticipantState|null);

                /** CarState needToRename */
                needToRename: boolean;

                /** CarState toBeDeleted */
                toBeDeleted: boolean;

                /** CarState eventJoined */
                eventJoined: boolean;

                /** CarState maxiGoldBoostItemRemainingNum */
                maxiGoldBoostItemRemainingNum?: (number|null);

                /** CarState maxiGoldBoostItemRate */
                maxiGoldBoostItemRate?: (number|null);

                /** CarState isExtraMaxiGoldBoostItem */
                isExtraMaxiGoldBoostItem?: (boolean|null);
            }

            /** Represents a CarState. */
            class CarState implements ICarState {

                /**
                 * Constructs a new CarState.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadUserResponse.ICarState);

                /** CarState hasOpponentGhost. */
                public hasOpponentGhost: boolean;

                /** CarState competitionState. */
                public competitionState: wm5.protobuf.GhostCompetitionParticipantState;

                /** CarState needToRename. */
                public needToRename: boolean;

                /** CarState toBeDeleted. */
                public toBeDeleted: boolean;

                /** CarState eventJoined. */
                public eventJoined: boolean;

                /** CarState maxiGoldBoostItemRemainingNum. */
                public maxiGoldBoostItemRemainingNum: number;

                /** CarState maxiGoldBoostItemRate. */
                public maxiGoldBoostItemRate: number;

                /** CarState isExtraMaxiGoldBoostItem. */
                public isExtraMaxiGoldBoostItem: boolean;

                /**
                 * Creates a new CarState instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CarState instance
                 */
                public static create(properties?: wm5.protobuf.LoadUserResponse.ICarState): wm5.protobuf.LoadUserResponse.CarState;

                /**
                 * Encodes the specified CarState message. Does not implicitly {@link wm5.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CarState message, length delimited. Does not implicitly {@link wm5.protobuf.LoadUserResponse.CarState.verify|verify} messages.
                 * @param message CarState message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadUserResponse.ICarState, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CarState message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadUserResponse.CarState;

                /**
                 * Decodes a CarState message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CarState
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadUserResponse.CarState;

                /**
                 * Verifies a CarState message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CarState message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CarState
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadUserResponse.CarState;

                /**
                 * Creates a plain object from a CarState message. Also converts values to other types if specified.
                 * @param message CarState
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadUserResponse.CarState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CarState to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CarState
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateUserLockRequest. */
        interface IUpdateUserLockRequest {

            /** UpdateUserLockRequest userId */
            userId?: (number|null);

            /** UpdateUserLockRequest cardChipId */
            cardChipId?: (string|null);

            /** UpdateUserLockRequest accessCode */
            accessCode?: (string|null);

            /** UpdateUserLockRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** UpdateUserLockRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** UpdateUserLockRequest device */
            device?: (wm5.protobuf.DeviceType|null);

            /** UpdateUserLockRequest unlockAt */
            unlockAt: number;
        }

        /** Represents an UpdateUserLockRequest. */
        class UpdateUserLockRequest implements IUpdateUserLockRequest {

            /**
             * Constructs a new UpdateUserLockRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateUserLockRequest);

            /** UpdateUserLockRequest userId. */
            public userId: number;

            /** UpdateUserLockRequest cardChipId. */
            public cardChipId: string;

            /** UpdateUserLockRequest accessCode. */
            public accessCode: string;

            /** UpdateUserLockRequest cardTypeCode. */
            public cardTypeCode: number;

            /** UpdateUserLockRequest cardRegionCode. */
            public cardRegionCode: number;

            /** UpdateUserLockRequest device. */
            public device: wm5.protobuf.DeviceType;

            /** UpdateUserLockRequest unlockAt. */
            public unlockAt: number;

            /**
             * Creates a new UpdateUserLockRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserLockRequest instance
             */
            public static create(properties?: wm5.protobuf.IUpdateUserLockRequest): wm5.protobuf.UpdateUserLockRequest;

            /**
             * Encodes the specified UpdateUserLockRequest message. Does not implicitly {@link wm5.protobuf.UpdateUserLockRequest.verify|verify} messages.
             * @param message UpdateUserLockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateUserLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserLockRequest message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateUserLockRequest.verify|verify} messages.
             * @param message UpdateUserLockRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateUserLockRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserLockRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserLockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateUserLockRequest;

            /**
             * Decodes an UpdateUserLockRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserLockRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateUserLockRequest;

            /**
             * Verifies an UpdateUserLockRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserLockRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserLockRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateUserLockRequest;

            /**
             * Creates a plain object from an UpdateUserLockRequest message. Also converts values to other types if specified.
             * @param message UpdateUserLockRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateUserLockRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserLockRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserLockRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateUserLockResponse. */
        interface IUpdateUserLockResponse {

            /** UpdateUserLockResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents an UpdateUserLockResponse. */
        class UpdateUserLockResponse implements IUpdateUserLockResponse {

            /**
             * Constructs a new UpdateUserLockResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateUserLockResponse);

            /** UpdateUserLockResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new UpdateUserLockResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateUserLockResponse instance
             */
            public static create(properties?: wm5.protobuf.IUpdateUserLockResponse): wm5.protobuf.UpdateUserLockResponse;

            /**
             * Encodes the specified UpdateUserLockResponse message. Does not implicitly {@link wm5.protobuf.UpdateUserLockResponse.verify|verify} messages.
             * @param message UpdateUserLockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateUserLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateUserLockResponse message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateUserLockResponse.verify|verify} messages.
             * @param message UpdateUserLockResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateUserLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateUserLockResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateUserLockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateUserLockResponse;

            /**
             * Decodes an UpdateUserLockResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateUserLockResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateUserLockResponse;

            /**
             * Verifies an UpdateUserLockResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateUserLockResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateUserLockResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateUserLockResponse;

            /**
             * Creates a plain object from an UpdateUserLockResponse message. Also converts values to other types if specified.
             * @param message UpdateUserLockResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateUserLockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateUserLockResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateUserLockResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDriveInformationRequest. */
        interface ILoadDriveInformationRequest {

            /** LoadDriveInformationRequest userId */
            userId?: (number|null);
        }

        /** Represents a LoadDriveInformationRequest. */
        class LoadDriveInformationRequest implements ILoadDriveInformationRequest {

            /**
             * Constructs a new LoadDriveInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadDriveInformationRequest);

            /** LoadDriveInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadDriveInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDriveInformationRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadDriveInformationRequest): wm5.protobuf.LoadDriveInformationRequest;

            /**
             * Encodes the specified LoadDriveInformationRequest message. Does not implicitly {@link wm5.protobuf.LoadDriveInformationRequest.verify|verify} messages.
             * @param message LoadDriveInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadDriveInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDriveInformationRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadDriveInformationRequest.verify|verify} messages.
             * @param message LoadDriveInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadDriveInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDriveInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDriveInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadDriveInformationRequest;

            /**
             * Decodes a LoadDriveInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDriveInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadDriveInformationRequest;

            /**
             * Verifies a LoadDriveInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDriveInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDriveInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadDriveInformationRequest;

            /**
             * Creates a plain object from a LoadDriveInformationRequest message. Also converts values to other types if specified.
             * @param message LoadDriveInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadDriveInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDriveInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDriveInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadDriveInformationResponse. */
        interface ILoadDriveInformationResponse {

            /** LoadDriveInformationResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadDriveInformationResponse noticeWindow */
            noticeWindow?: (wm5.protobuf.NoticeEntry[]|null);

            /** LoadDriveInformationResponse noticeWindowMessage */
            noticeWindowMessage?: (string[]|null);

            /** LoadDriveInformationResponse transferNotice */
            transferNotice?: (wm5.protobuf.ITransferNotice|null);

            /** LoadDriveInformationResponse restrictedModels */
            restrictedModels?: (number[]|null);

            /** LoadDriveInformationResponse announceFeature */
            announceFeature?: (boolean|null);

            /** LoadDriveInformationResponse announceMobile */
            announceMobile?: (boolean|null);
        }

        /** Represents a LoadDriveInformationResponse. */
        class LoadDriveInformationResponse implements ILoadDriveInformationResponse {

            /**
             * Constructs a new LoadDriveInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadDriveInformationResponse);

            /** LoadDriveInformationResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadDriveInformationResponse noticeWindow. */
            public noticeWindow: wm5.protobuf.NoticeEntry[];

            /** LoadDriveInformationResponse noticeWindowMessage. */
            public noticeWindowMessage: string[];

            /** LoadDriveInformationResponse transferNotice. */
            public transferNotice?: (wm5.protobuf.ITransferNotice|null);

            /** LoadDriveInformationResponse restrictedModels. */
            public restrictedModels: number[];

            /** LoadDriveInformationResponse announceFeature. */
            public announceFeature: boolean;

            /** LoadDriveInformationResponse announceMobile. */
            public announceMobile: boolean;

            /**
             * Creates a new LoadDriveInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadDriveInformationResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadDriveInformationResponse): wm5.protobuf.LoadDriveInformationResponse;

            /**
             * Encodes the specified LoadDriveInformationResponse message. Does not implicitly {@link wm5.protobuf.LoadDriveInformationResponse.verify|verify} messages.
             * @param message LoadDriveInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadDriveInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadDriveInformationResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadDriveInformationResponse.verify|verify} messages.
             * @param message LoadDriveInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadDriveInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadDriveInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadDriveInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadDriveInformationResponse;

            /**
             * Decodes a LoadDriveInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadDriveInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadDriveInformationResponse;

            /**
             * Verifies a LoadDriveInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadDriveInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadDriveInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadDriveInformationResponse;

            /**
             * Creates a plain object from a LoadDriveInformationResponse message. Also converts values to other types if specified.
             * @param message LoadDriveInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadDriveInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadDriveInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadDriveInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarRequest. */
        interface ILoadCarRequest {

            /** LoadCarRequest carId */
            carId: number;

            /** LoadCarRequest eventMode */
            eventMode?: (boolean|null);

            /** LoadCarRequest eventModeSerial */
            eventModeSerial?: (string|null);
        }

        /** Represents a LoadCarRequest. */
        class LoadCarRequest implements ILoadCarRequest {

            /**
             * Constructs a new LoadCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadCarRequest);

            /** LoadCarRequest carId. */
            public carId: number;

            /** LoadCarRequest eventMode. */
            public eventMode: boolean;

            /** LoadCarRequest eventModeSerial. */
            public eventModeSerial: string;

            /**
             * Creates a new LoadCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadCarRequest): wm5.protobuf.LoadCarRequest;

            /**
             * Encodes the specified LoadCarRequest message. Does not implicitly {@link wm5.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadCarRequest.verify|verify} messages.
             * @param message LoadCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadCarRequest;

            /**
             * Decodes a LoadCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadCarRequest;

            /**
             * Verifies a LoadCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadCarRequest;

            /**
             * Creates a plain object from a LoadCarRequest message. Also converts values to other types if specified.
             * @param message LoadCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarResponse. */
        interface ILoadCarResponse {

            /** LoadCarResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadCarResponse car */
            car: wm5.protobuf.ICar;

            /** LoadCarResponse tuningPoint */
            tuningPoint: number;

            /** LoadCarResponse shopPoint */
            shopPoint: number;

            /** LoadCarResponse shopGrade */
            shopGrade: number;

            /** LoadCarResponse odometer */
            odometer: number;

            /** LoadCarResponse playCount */
            playCount: number;

            /** LoadCarResponse earnedCustomColor */
            earnedCustomColor: boolean;

            /** LoadCarResponse totalMaxiGold */
            totalMaxiGold: number;

            /** LoadCarResponse setting */
            setting: wm5.protobuf.ICarSetting;

            /** LoadCarResponse bgmPlaylist */
            bgmPlaylist?: (number[]|null);

            /** LoadCarResponse vsPlayCount */
            vsPlayCount: number;

            /** LoadCarResponse vsBurstCount */
            vsBurstCount: number;

            /** LoadCarResponse vsStarCount */
            vsStarCount: number;

            /** LoadCarResponse vsStarCountMax */
            vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild */
            vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough */
            vsSmoothOrRough: number;

            /** LoadCarResponse vsTripleStarMedals */
            vsTripleStarMedals: number;

            /** LoadCarResponse vsDoubleStarMedals */
            vsDoubleStarMedals: number;

            /** LoadCarResponse vsSingleStarMedals */
            vsSingleStarMedals: number;

            /** LoadCarResponse vsPlainMedals */
            vsPlainMedals: number;

            /** LoadCarResponse rgPlayCount */
            rgPlayCount: number;

            /** LoadCarResponse rgWinCount */
            rgWinCount: number;

            /** LoadCarResponse maxiCoin */
            maxiCoin: number;

            /** LoadCarResponse rgBlock */
            rgBlock: number;

            /** LoadCarResponse rgProgress */
            rgProgress?: (number[]|null);

            /** LoadCarResponse rgClearCount */
            rgClearCount: number;

            /** LoadCarResponse rgConsecutiveLosses */
            rgConsecutiveLosses: number;

            /** LoadCarResponse rgPastClearRegions */
            rgPastClearRegions: number;

            /** LoadCarResponse rgCharacterEffect */
            rgCharacterEffect: number;

            /** LoadCarResponse rgMotionEffect */
            rgMotionEffect: number;

            /** LoadCarResponse rgStamp */
            rgStamp: number;

            /** LoadCarResponse stPlayCount */
            stPlayCount: number;

            /** LoadCarResponse stClearBits */
            stClearBits: number;

            /** LoadCarResponse stClearDivCount */
            stClearDivCount: number;

            /** LoadCarResponse stClearCount */
            stClearCount: number;

            /** LoadCarResponse stLoseBits */
            stLoseBits: (number|Long);

            /** LoadCarResponse stLose */
            stLose: boolean;

            /** LoadCarResponse stConsecutiveWins */
            stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax: number;

            /** LoadCarResponse challenger */
            challenger?: (wm5.protobuf.IChallengerCar|null);

            /** LoadCarResponse challengerCar */
            challengerCar?: (wm5.protobuf.ICar|null);

            /** LoadCarResponse challengerReturnCount */
            challengerReturnCount?: (number|null);

            /** LoadCarResponse numOfChallengers */
            numOfChallengers?: (number|null);

            /** LoadCarResponse opponentGhost */
            opponentGhost?: (wm5.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId */
            opponentTrailId?: (number|Long|null);

            /** LoadCarResponse opponentCompetitionId */
            opponentCompetitionId?: (number|null);

            /** LoadCarResponse competitionParameter */
            competitionParameter?: (wm5.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse specialTitles */
            specialTitles?: (string[]|null);

            /** LoadCarResponse earnedTitles */
            earnedTitles?: (string[]|null);

            /** LoadCarResponse ownedItems */
            ownedItems?: (wm5.protobuf.ICarItem[]|null);

            /** LoadCarResponse auraMotifAutoChange */
            auraMotifAutoChange: boolean;

            /** LoadCarResponse specialAuraMotif */
            specialAuraMotif?: (wm5.protobuf.ISpecialAuraMotif|null);

            /** LoadCarResponse screenshotCount */
            screenshotCount: number;

            /** LoadCarResponse announceEventModePrize */
            announceEventModePrize?: (boolean|null);
        }

        /** Represents a LoadCarResponse. */
        class LoadCarResponse implements ILoadCarResponse {

            /**
             * Constructs a new LoadCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadCarResponse);

            /** LoadCarResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadCarResponse car. */
            public car: wm5.protobuf.ICar;

            /** LoadCarResponse tuningPoint. */
            public tuningPoint: number;

            /** LoadCarResponse shopPoint. */
            public shopPoint: number;

            /** LoadCarResponse shopGrade. */
            public shopGrade: number;

            /** LoadCarResponse odometer. */
            public odometer: number;

            /** LoadCarResponse playCount. */
            public playCount: number;

            /** LoadCarResponse earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** LoadCarResponse totalMaxiGold. */
            public totalMaxiGold: number;

            /** LoadCarResponse setting. */
            public setting: wm5.protobuf.ICarSetting;

            /** LoadCarResponse bgmPlaylist. */
            public bgmPlaylist: number[];

            /** LoadCarResponse vsPlayCount. */
            public vsPlayCount: number;

            /** LoadCarResponse vsBurstCount. */
            public vsBurstCount: number;

            /** LoadCarResponse vsStarCount. */
            public vsStarCount: number;

            /** LoadCarResponse vsStarCountMax. */
            public vsStarCountMax: number;

            /** LoadCarResponse vsCoolOrWild. */
            public vsCoolOrWild: number;

            /** LoadCarResponse vsSmoothOrRough. */
            public vsSmoothOrRough: number;

            /** LoadCarResponse vsTripleStarMedals. */
            public vsTripleStarMedals: number;

            /** LoadCarResponse vsDoubleStarMedals. */
            public vsDoubleStarMedals: number;

            /** LoadCarResponse vsSingleStarMedals. */
            public vsSingleStarMedals: number;

            /** LoadCarResponse vsPlainMedals. */
            public vsPlainMedals: number;

            /** LoadCarResponse rgPlayCount. */
            public rgPlayCount: number;

            /** LoadCarResponse rgWinCount. */
            public rgWinCount: number;

            /** LoadCarResponse maxiCoin. */
            public maxiCoin: number;

            /** LoadCarResponse rgBlock. */
            public rgBlock: number;

            /** LoadCarResponse rgProgress. */
            public rgProgress: number[];

            /** LoadCarResponse rgClearCount. */
            public rgClearCount: number;

            /** LoadCarResponse rgConsecutiveLosses. */
            public rgConsecutiveLosses: number;

            /** LoadCarResponse rgPastClearRegions. */
            public rgPastClearRegions: number;

            /** LoadCarResponse rgCharacterEffect. */
            public rgCharacterEffect: number;

            /** LoadCarResponse rgMotionEffect. */
            public rgMotionEffect: number;

            /** LoadCarResponse rgStamp. */
            public rgStamp: number;

            /** LoadCarResponse stPlayCount. */
            public stPlayCount: number;

            /** LoadCarResponse stClearBits. */
            public stClearBits: number;

            /** LoadCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** LoadCarResponse stClearCount. */
            public stClearCount: number;

            /** LoadCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** LoadCarResponse stLose. */
            public stLose: boolean;

            /** LoadCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** LoadCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /** LoadCarResponse challenger. */
            public challenger?: (wm5.protobuf.IChallengerCar|null);

            /** LoadCarResponse challengerCar. */
            public challengerCar?: (wm5.protobuf.ICar|null);

            /** LoadCarResponse challengerReturnCount. */
            public challengerReturnCount: number;

            /** LoadCarResponse numOfChallengers. */
            public numOfChallengers: number;

            /** LoadCarResponse opponentGhost. */
            public opponentGhost?: (wm5.protobuf.IGhostCar|null);

            /** LoadCarResponse opponentTrailId. */
            public opponentTrailId: (number|Long);

            /** LoadCarResponse opponentCompetitionId. */
            public opponentCompetitionId: number;

            /** LoadCarResponse competitionParameter. */
            public competitionParameter?: (wm5.protobuf.IGhostCompetitionParameter|null);

            /** LoadCarResponse specialTitles. */
            public specialTitles: string[];

            /** LoadCarResponse earnedTitles. */
            public earnedTitles: string[];

            /** LoadCarResponse ownedItems. */
            public ownedItems: wm5.protobuf.ICarItem[];

            /** LoadCarResponse auraMotifAutoChange. */
            public auraMotifAutoChange: boolean;

            /** LoadCarResponse specialAuraMotif. */
            public specialAuraMotif?: (wm5.protobuf.ISpecialAuraMotif|null);

            /** LoadCarResponse screenshotCount. */
            public screenshotCount: number;

            /** LoadCarResponse announceEventModePrize. */
            public announceEventModePrize: boolean;

            /**
             * Creates a new LoadCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadCarResponse): wm5.protobuf.LoadCarResponse;

            /**
             * Encodes the specified LoadCarResponse message. Does not implicitly {@link wm5.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadCarResponse.verify|verify} messages.
             * @param message LoadCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadCarResponse;

            /**
             * Decodes a LoadCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadCarResponse;

            /**
             * Verifies a LoadCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadCarResponse;

            /**
             * Creates a plain object from a LoadCarResponse message. Also converts values to other types if specified.
             * @param message LoadCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateCarRequest. */
        interface ICreateCarRequest {

            /** CreateCarRequest userId */
            userId?: (number|null);

            /** CreateCarRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateCarRequest accessCode */
            accessCode?: (string|null);

            /** CreateCarRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateCarRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateCarRequest device */
            device?: (wm5.protobuf.DeviceType|null);

            /** CreateCarRequest car */
            car: wm5.protobuf.ICar;

            /** CreateCarRequest transmission */
            transmission: boolean;

            /** CreateCarRequest method */
            method: wm5.protobuf.CarCreationMethod;

            /** CreateCarRequest timestamp */
            timestamp: number;

            /** CreateCarRequest userItemId */
            userItemId?: (number|null);
        }

        /** Represents a CreateCarRequest. */
        class CreateCarRequest implements ICreateCarRequest {

            /**
             * Constructs a new CreateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateCarRequest);

            /** CreateCarRequest userId. */
            public userId: number;

            /** CreateCarRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarRequest cardChipId. */
            public cardChipId: string;

            /** CreateCarRequest accessCode. */
            public accessCode: string;

            /** CreateCarRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateCarRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateCarRequest device. */
            public device: wm5.protobuf.DeviceType;

            /** CreateCarRequest car. */
            public car: wm5.protobuf.ICar;

            /** CreateCarRequest transmission. */
            public transmission: boolean;

            /** CreateCarRequest method. */
            public method: wm5.protobuf.CarCreationMethod;

            /** CreateCarRequest timestamp. */
            public timestamp: number;

            /** CreateCarRequest userItemId. */
            public userItemId: number;

            /**
             * Creates a new CreateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarRequest instance
             */
            public static create(properties?: wm5.protobuf.ICreateCarRequest): wm5.protobuf.CreateCarRequest;

            /**
             * Encodes the specified CreateCarRequest message. Does not implicitly {@link wm5.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CreateCarRequest.verify|verify} messages.
             * @param message CreateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateCarRequest;

            /**
             * Decodes a CreateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateCarRequest;

            /**
             * Verifies a CreateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateCarRequest;

            /**
             * Creates a plain object from a CreateCarRequest message. Also converts values to other types if specified.
             * @param message CreateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateCarResponse. */
        interface ICreateCarResponse {

            /** CreateCarResponse error */
            error: wm5.protobuf.ErrorCode;

            /** CreateCarResponse accessCode */
            accessCode?: (string|null);

            /** CreateCarResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateCarResponse personId */
            personId?: (string|null);

            /** CreateCarResponse bnidLevel */
            bnidLevel?: (number|null);

            /** CreateCarResponse userId */
            userId: number;

            /** CreateCarResponse carId */
            carId: number;

            /** CreateCarResponse stClearBits */
            stClearBits?: (number|null);

            /** CreateCarResponse stClearDivCount */
            stClearDivCount?: (number|null);

            /** CreateCarResponse stClearCount */
            stClearCount?: (number|null);

            /** CreateCarResponse stLoseBits */
            stLoseBits?: (number|Long|null);

            /** CreateCarResponse stLose */
            stLose?: (boolean|null);

            /** CreateCarResponse stConsecutiveWins */
            stConsecutiveWins?: (number|null);

            /** CreateCarResponse stConsecutiveWinsMax */
            stConsecutiveWinsMax?: (number|null);

            /** CreateCarResponse specialAuraMotif */
            specialAuraMotif?: (wm5.protobuf.ISpecialAuraMotif|null);

            /** CreateCarResponse rgStamp */
            rgStamp: number;
        }

        /** Represents a CreateCarResponse. */
        class CreateCarResponse implements ICreateCarResponse {

            /**
             * Constructs a new CreateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateCarResponse);

            /** CreateCarResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** CreateCarResponse accessCode. */
            public accessCode: string;

            /** CreateCarResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateCarResponse personId. */
            public personId: string;

            /** CreateCarResponse bnidLevel. */
            public bnidLevel: number;

            /** CreateCarResponse userId. */
            public userId: number;

            /** CreateCarResponse carId. */
            public carId: number;

            /** CreateCarResponse stClearBits. */
            public stClearBits: number;

            /** CreateCarResponse stClearDivCount. */
            public stClearDivCount: number;

            /** CreateCarResponse stClearCount. */
            public stClearCount: number;

            /** CreateCarResponse stLoseBits. */
            public stLoseBits: (number|Long);

            /** CreateCarResponse stLose. */
            public stLose: boolean;

            /** CreateCarResponse stConsecutiveWins. */
            public stConsecutiveWins: number;

            /** CreateCarResponse stConsecutiveWinsMax. */
            public stConsecutiveWinsMax: number;

            /** CreateCarResponse specialAuraMotif. */
            public specialAuraMotif?: (wm5.protobuf.ISpecialAuraMotif|null);

            /** CreateCarResponse rgStamp. */
            public rgStamp: number;

            /**
             * Creates a new CreateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateCarResponse instance
             */
            public static create(properties?: wm5.protobuf.ICreateCarResponse): wm5.protobuf.CreateCarResponse;

            /**
             * Encodes the specified CreateCarResponse message. Does not implicitly {@link wm5.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateCarResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CreateCarResponse.verify|verify} messages.
             * @param message CreateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateCarResponse;

            /**
             * Decodes a CreateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateCarResponse;

            /**
             * Verifies a CreateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateCarResponse;

            /**
             * Creates a plain object from a CreateCarResponse message. Also converts values to other types if specified.
             * @param message CreateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryRequest. */
        interface ILoadGameHistoryRequest {

            /** LoadGameHistoryRequest carId */
            carId: number;
        }

        /** Represents a LoadGameHistoryRequest. */
        class LoadGameHistoryRequest implements ILoadGameHistoryRequest {

            /**
             * Constructs a new LoadGameHistoryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGameHistoryRequest);

            /** LoadGameHistoryRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGameHistoryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadGameHistoryRequest): wm5.protobuf.LoadGameHistoryRequest;

            /**
             * Encodes the specified LoadGameHistoryRequest message. Does not implicitly {@link wm5.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGameHistoryRequest.verify|verify} messages.
             * @param message LoadGameHistoryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGameHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGameHistoryRequest;

            /**
             * Decodes a LoadGameHistoryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGameHistoryRequest;

            /**
             * Verifies a LoadGameHistoryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGameHistoryRequest;

            /**
             * Creates a plain object from a LoadGameHistoryRequest message. Also converts values to other types if specified.
             * @param message LoadGameHistoryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGameHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGameHistoryResponse. */
        interface ILoadGameHistoryResponse {

            /** LoadGameHistoryResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords */
            taRecords?: (wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[]|null);

            /** LoadGameHistoryResponse taRankingUpdatedAt */
            taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory */
            ghostHistory?: (wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[]|null);

            /** LoadGameHistoryResponse ghostBattleCount */
            ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount */
            ghostBattleWinCount: number;

            /** LoadGameHistoryResponse stampSheetCount */
            stampSheetCount: number;

            /** LoadGameHistoryResponse stampSheet */
            stampSheet?: (number[]|null);
        }

        /** Represents a LoadGameHistoryResponse. */
        class LoadGameHistoryResponse implements ILoadGameHistoryResponse {

            /**
             * Constructs a new LoadGameHistoryResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGameHistoryResponse);

            /** LoadGameHistoryResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadGameHistoryResponse taRecords. */
            public taRecords: wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord[];

            /** LoadGameHistoryResponse taRankingUpdatedAt. */
            public taRankingUpdatedAt: number;

            /** LoadGameHistoryResponse ghostHistory. */
            public ghostHistory: wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord[];

            /** LoadGameHistoryResponse ghostBattleCount. */
            public ghostBattleCount: number;

            /** LoadGameHistoryResponse ghostBattleWinCount. */
            public ghostBattleWinCount: number;

            /** LoadGameHistoryResponse stampSheetCount. */
            public stampSheetCount: number;

            /** LoadGameHistoryResponse stampSheet. */
            public stampSheet: number[];

            /**
             * Creates a new LoadGameHistoryResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGameHistoryResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadGameHistoryResponse): wm5.protobuf.LoadGameHistoryResponse;

            /**
             * Encodes the specified LoadGameHistoryResponse message. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGameHistoryResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.verify|verify} messages.
             * @param message LoadGameHistoryResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGameHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGameHistoryResponse;

            /**
             * Decodes a LoadGameHistoryResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGameHistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGameHistoryResponse;

            /**
             * Verifies a LoadGameHistoryResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGameHistoryResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGameHistoryResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGameHistoryResponse;

            /**
             * Creates a plain object from a LoadGameHistoryResponse message. Also converts values to other types if specified.
             * @param message LoadGameHistoryResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGameHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGameHistoryResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGameHistoryResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGameHistoryResponse {

            /** Properties of a TimeAttackRecord. */
            interface ITimeAttackRecord {

                /** TimeAttackRecord course */
                course: number;

                /** TimeAttackRecord time */
                time?: (number|null);

                /** TimeAttackRecord tunePower */
                tunePower?: (number|null);

                /** TimeAttackRecord tuneHandling */
                tuneHandling?: (number|null);

                /** TimeAttackRecord wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackRecord wholeParticipants */
                wholeParticipants: number;

                /** TimeAttackRecord modelRank */
                modelRank?: (number|null);

                /** TimeAttackRecord modelParticipants */
                modelParticipants: number;
            }

            /** Represents a TimeAttackRecord. */
            class TimeAttackRecord implements ITimeAttackRecord {

                /**
                 * Constructs a new TimeAttackRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord);

                /** TimeAttackRecord course. */
                public course: number;

                /** TimeAttackRecord time. */
                public time: number;

                /** TimeAttackRecord tunePower. */
                public tunePower: number;

                /** TimeAttackRecord tuneHandling. */
                public tuneHandling: number;

                /** TimeAttackRecord wholeRank. */
                public wholeRank: number;

                /** TimeAttackRecord wholeParticipants. */
                public wholeParticipants: number;

                /** TimeAttackRecord modelRank. */
                public modelRank: number;

                /** TimeAttackRecord modelParticipants. */
                public modelParticipants: number;

                /**
                 * Creates a new TimeAttackRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackRecord instance
                 */
                public static create(properties?: wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord): wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Encodes the specified TimeAttackRecord message. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackRecord message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord.verify|verify} messages.
                 * @param message TimeAttackRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadGameHistoryResponse.ITimeAttackRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Decodes a TimeAttackRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Verifies a TimeAttackRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackRecord
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord;

                /**
                 * Creates a plain object from a TimeAttackRecord message. Also converts values to other types if specified.
                 * @param message TimeAttackRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadGameHistoryResponse.TimeAttackRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleRecord. */
            interface IGhostBattleRecord {

                /** GhostBattleRecord opponentName */
                opponentName: string;

                /** GhostBattleRecord opponentModel */
                opponentModel: number;

                /** GhostBattleRecord opponentVisualModel */
                opponentVisualModel: number;

                /** GhostBattleRecord opponentDefaultColor */
                opponentDefaultColor: number;

                /** GhostBattleRecord opponentRegionId */
                opponentRegionId: number;

                /** GhostBattleRecord opponentTunePower */
                opponentTunePower: number;

                /** GhostBattleRecord opponentTuneHandling */
                opponentTuneHandling: number;

                /** GhostBattleRecord area */
                area: number;

                /** GhostBattleRecord result */
                result: number;

                /** GhostBattleRecord isChallenger */
                isChallenger: boolean;

                /** GhostBattleRecord stampReturnCount */
                stampReturnCount: number;

                /** GhostBattleRecord playedAt */
                playedAt: number;

                /** GhostBattleRecord playedShopName */
                playedShopName: string;
            }

            /** Represents a GhostBattleRecord. */
            class GhostBattleRecord implements IGhostBattleRecord {

                /**
                 * Constructs a new GhostBattleRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord);

                /** GhostBattleRecord opponentName. */
                public opponentName: string;

                /** GhostBattleRecord opponentModel. */
                public opponentModel: number;

                /** GhostBattleRecord opponentVisualModel. */
                public opponentVisualModel: number;

                /** GhostBattleRecord opponentDefaultColor. */
                public opponentDefaultColor: number;

                /** GhostBattleRecord opponentRegionId. */
                public opponentRegionId: number;

                /** GhostBattleRecord opponentTunePower. */
                public opponentTunePower: number;

                /** GhostBattleRecord opponentTuneHandling. */
                public opponentTuneHandling: number;

                /** GhostBattleRecord area. */
                public area: number;

                /** GhostBattleRecord result. */
                public result: number;

                /** GhostBattleRecord isChallenger. */
                public isChallenger: boolean;

                /** GhostBattleRecord stampReturnCount. */
                public stampReturnCount: number;

                /** GhostBattleRecord playedAt. */
                public playedAt: number;

                /** GhostBattleRecord playedShopName. */
                public playedShopName: string;

                /**
                 * Creates a new GhostBattleRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleRecord instance
                 */
                public static create(properties?: wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord): wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Encodes the specified GhostBattleRecord message. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleRecord message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord.verify|verify} messages.
                 * @param message GhostBattleRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadGameHistoryResponse.IGhostBattleRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Decodes a GhostBattleRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Verifies a GhostBattleRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleRecord
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord;

                /**
                 * Creates a plain object from a GhostBattleRecord message. Also converts values to other types if specified.
                 * @param message GhostBattleRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadGameHistoryResponse.GhostBattleRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleRecord
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an UpdateCarRequest. */
        interface IUpdateCarRequest {

            /** UpdateCarRequest carId */
            carId: number;

            /** UpdateCarRequest car */
            car?: (wm5.protobuf.ICar|null);

            /** UpdateCarRequest hp600Count */
            hp600Count?: (number|null);

            /** UpdateCarRequest earnedItems */
            earnedItems?: (wm5.protobuf.ICarItem[]|null);

            /** UpdateCarRequest setting */
            setting?: (wm5.protobuf.ICarSetting|null);

            /** UpdateCarRequest earnedMaxiGold */
            earnedMaxiGold?: (number|null);

            /** UpdateCarRequest expendedMaxiGold */
            expendedMaxiGold?: (number|null);

            /** UpdateCarRequest maxiGold */
            maxiGold?: (number|null);

            /** UpdateCarRequest toBeDeleted */
            toBeDeleted?: (boolean|null);

            /** UpdateCarRequest auraMotifAutoChange */
            auraMotifAutoChange?: (boolean|null);

            /** UpdateCarRequest repayingCampaign */
            repayingCampaign?: (boolean|null);

            /** UpdateCarRequest rgStamp */
            rgStamp?: (number|null);

            /** UpdateCarRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateCarRequest. */
        class UpdateCarRequest implements IUpdateCarRequest {

            /**
             * Constructs a new UpdateCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateCarRequest);

            /** UpdateCarRequest carId. */
            public carId: number;

            /** UpdateCarRequest car. */
            public car?: (wm5.protobuf.ICar|null);

            /** UpdateCarRequest hp600Count. */
            public hp600Count: number;

            /** UpdateCarRequest earnedItems. */
            public earnedItems: wm5.protobuf.ICarItem[];

            /** UpdateCarRequest setting. */
            public setting?: (wm5.protobuf.ICarSetting|null);

            /** UpdateCarRequest earnedMaxiGold. */
            public earnedMaxiGold: number;

            /** UpdateCarRequest expendedMaxiGold. */
            public expendedMaxiGold: number;

            /** UpdateCarRequest maxiGold. */
            public maxiGold: number;

            /** UpdateCarRequest toBeDeleted. */
            public toBeDeleted: boolean;

            /** UpdateCarRequest auraMotifAutoChange. */
            public auraMotifAutoChange: boolean;

            /** UpdateCarRequest repayingCampaign. */
            public repayingCampaign: boolean;

            /** UpdateCarRequest rgStamp. */
            public rgStamp: number;

            /** UpdateCarRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarRequest instance
             */
            public static create(properties?: wm5.protobuf.IUpdateCarRequest): wm5.protobuf.UpdateCarRequest;

            /**
             * Encodes the specified UpdateCarRequest message. Does not implicitly {@link wm5.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarRequest message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateCarRequest.verify|verify} messages.
             * @param message UpdateCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateCarRequest;

            /**
             * Decodes an UpdateCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateCarRequest;

            /**
             * Verifies an UpdateCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateCarRequest;

            /**
             * Creates a plain object from an UpdateCarRequest message. Also converts values to other types if specified.
             * @param message UpdateCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateCarResponse. */
        interface IUpdateCarResponse {

            /** UpdateCarResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents an UpdateCarResponse. */
        class UpdateCarResponse implements IUpdateCarResponse {

            /**
             * Constructs a new UpdateCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateCarResponse);

            /** UpdateCarResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new UpdateCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateCarResponse instance
             */
            public static create(properties?: wm5.protobuf.IUpdateCarResponse): wm5.protobuf.UpdateCarResponse;

            /**
             * Encodes the specified UpdateCarResponse message. Does not implicitly {@link wm5.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateCarResponse message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateCarResponse.verify|verify} messages.
             * @param message UpdateCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateCarResponse;

            /**
             * Decodes an UpdateCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateCarResponse;

            /**
             * Verifies an UpdateCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateCarResponse;

            /**
             * Creates a plain object from an UpdateCarResponse message. Also converts values to other types if specified.
             * @param message UpdateCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveGameResultRequest. */
        interface ISaveGameResultRequest {

            /** SaveGameResultRequest carId */
            carId: number;

            /** SaveGameResultRequest gameMode */
            gameMode: wm5.protobuf.GameMode;

            /** SaveGameResultRequest playedAt */
            playedAt: number;

            /** SaveGameResultRequest playCount */
            playCount: number;

            /** SaveGameResultRequest retired */
            retired: boolean;

            /** SaveGameResultRequest timeup */
            timeup: boolean;

            /** SaveGameResultRequest car */
            car?: (wm5.protobuf.ICar|null);

            /** SaveGameResultRequest setting */
            setting?: (wm5.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer */
            odometer?: (number|null);

            /** SaveGameResultRequest hp600Count */
            hp600Count?: (number|null);

            /** SaveGameResultRequest earnedCustomColor */
            earnedCustomColor?: (boolean|null);

            /** SaveGameResultRequest confirmedTutorials */
            confirmedTutorials?: (wm5.protobuf.TutorialType[]|null);

            /** SaveGameResultRequest earnedItems */
            earnedItems?: (wm5.protobuf.ICarItem[]|null);

            /** SaveGameResultRequest preservedTitles */
            preservedTitles?: (string[]|null);

            /** SaveGameResultRequest earnedMaxiGold */
            earnedMaxiGold?: (number|null);

            /** SaveGameResultRequest expendedMaxiGold */
            expendedMaxiGold?: (number|null);

            /** SaveGameResultRequest maxiGold */
            maxiGold?: (number|null);

            /** SaveGameResultRequest repayingCampaign */
            repayingCampaign?: (boolean|null);

            /** SaveGameResultRequest neighborCars */
            neighborCars?: (number[]|null);

            /** SaveGameResultRequest stResult */
            stResult?: (wm5.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult */
            taResult?: (wm5.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult */
            vsResult?: (wm5.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult */
            rgResult?: (wm5.protobuf.SaveGameResultRequest.IGhostBattleResult|null);
        }

        /** Represents a SaveGameResultRequest. */
        class SaveGameResultRequest implements ISaveGameResultRequest {

            /**
             * Constructs a new SaveGameResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveGameResultRequest);

            /** SaveGameResultRequest carId. */
            public carId: number;

            /** SaveGameResultRequest gameMode. */
            public gameMode: wm5.protobuf.GameMode;

            /** SaveGameResultRequest playedAt. */
            public playedAt: number;

            /** SaveGameResultRequest playCount. */
            public playCount: number;

            /** SaveGameResultRequest retired. */
            public retired: boolean;

            /** SaveGameResultRequest timeup. */
            public timeup: boolean;

            /** SaveGameResultRequest car. */
            public car?: (wm5.protobuf.ICar|null);

            /** SaveGameResultRequest setting. */
            public setting?: (wm5.protobuf.ICarSetting|null);

            /** SaveGameResultRequest odometer. */
            public odometer: number;

            /** SaveGameResultRequest hp600Count. */
            public hp600Count: number;

            /** SaveGameResultRequest earnedCustomColor. */
            public earnedCustomColor: boolean;

            /** SaveGameResultRequest confirmedTutorials. */
            public confirmedTutorials: wm5.protobuf.TutorialType[];

            /** SaveGameResultRequest earnedItems. */
            public earnedItems: wm5.protobuf.ICarItem[];

            /** SaveGameResultRequest preservedTitles. */
            public preservedTitles: string[];

            /** SaveGameResultRequest earnedMaxiGold. */
            public earnedMaxiGold: number;

            /** SaveGameResultRequest expendedMaxiGold. */
            public expendedMaxiGold: number;

            /** SaveGameResultRequest maxiGold. */
            public maxiGold: number;

            /** SaveGameResultRequest repayingCampaign. */
            public repayingCampaign: boolean;

            /** SaveGameResultRequest neighborCars. */
            public neighborCars: number[];

            /** SaveGameResultRequest stResult. */
            public stResult?: (wm5.protobuf.SaveGameResultRequest.IStoryResult|null);

            /** SaveGameResultRequest taResult. */
            public taResult?: (wm5.protobuf.SaveGameResultRequest.ITimeAttackResult|null);

            /** SaveGameResultRequest vsResult. */
            public vsResult?: (wm5.protobuf.SaveGameResultRequest.IVersusBattleResult|null);

            /** SaveGameResultRequest rgResult. */
            public rgResult?: (wm5.protobuf.SaveGameResultRequest.IGhostBattleResult|null);

            /**
             * Creates a new SaveGameResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveGameResultRequest): wm5.protobuf.SaveGameResultRequest;

            /**
             * Encodes the specified SaveGameResultRequest message. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.verify|verify} messages.
             * @param message SaveGameResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveGameResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultRequest;

            /**
             * Decodes a SaveGameResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultRequest;

            /**
             * Verifies a SaveGameResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultRequest;

            /**
             * Creates a plain object from a SaveGameResultRequest message. Also converts values to other types if specified.
             * @param message SaveGameResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveGameResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveGameResultRequest {

            /** Properties of a StoryResult. */
            interface IStoryResult {

                /** StoryResult stPlayCount */
                stPlayCount: number;

                /** StoryResult tuningPoint */
                tuningPoint?: (number|null);

                /** StoryResult stClearBits */
                stClearBits?: (number|null);

                /** StoryResult stClearDivCount */
                stClearDivCount?: (number|null);

                /** StoryResult stClearCount */
                stClearCount?: (number|null);

                /** StoryResult stLoseBits */
                stLoseBits?: (number|Long|null);

                /** StoryResult stLose */
                stLose?: (boolean|null);

                /** StoryResult stConsecutiveWins */
                stConsecutiveWins?: (number|null);
            }

            /** Represents a StoryResult. */
            class StoryResult implements IStoryResult {

                /**
                 * Constructs a new StoryResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveGameResultRequest.IStoryResult);

                /** StoryResult stPlayCount. */
                public stPlayCount: number;

                /** StoryResult tuningPoint. */
                public tuningPoint: number;

                /** StoryResult stClearBits. */
                public stClearBits: number;

                /** StoryResult stClearDivCount. */
                public stClearDivCount: number;

                /** StoryResult stClearCount. */
                public stClearCount: number;

                /** StoryResult stLoseBits. */
                public stLoseBits: (number|Long);

                /** StoryResult stLose. */
                public stLose: boolean;

                /** StoryResult stConsecutiveWins. */
                public stConsecutiveWins: number;

                /**
                 * Creates a new StoryResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StoryResult instance
                 */
                public static create(properties?: wm5.protobuf.SaveGameResultRequest.IStoryResult): wm5.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Encodes the specified StoryResult message. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StoryResult message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.StoryResult.verify|verify} messages.
                 * @param message StoryResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveGameResultRequest.IStoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Decodes a StoryResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StoryResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Verifies a StoryResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StoryResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StoryResult
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultRequest.StoryResult;

                /**
                 * Creates a plain object from a StoryResult message. Also converts values to other types if specified.
                 * @param message StoryResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveGameResultRequest.StoryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StoryResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for StoryResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TimeAttackResult. */
            interface ITimeAttackResult {

                /** TimeAttackResult time */
                time: number;

                /** TimeAttackResult course */
                course: number;

                /** TimeAttackResult section_1Time */
                section_1Time: number;

                /** TimeAttackResult section_2Time */
                section_2Time: number;

                /** TimeAttackResult section_3Time */
                section_3Time: number;

                /** TimeAttackResult section_4Time */
                section_4Time: number;

                /** TimeAttackResult section_5Time */
                section_5Time?: (number|null);

                /** TimeAttackResult section_6Time */
                section_6Time?: (number|null);

                /** TimeAttackResult section_7Time */
                section_7Time?: (number|null);

                /** TimeAttackResult wholeRank */
                wholeRank?: (number|null);

                /** TimeAttackResult modelRank */
                modelRank?: (number|null);
            }

            /** Represents a TimeAttackResult. */
            class TimeAttackResult implements ITimeAttackResult {

                /**
                 * Constructs a new TimeAttackResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveGameResultRequest.ITimeAttackResult);

                /** TimeAttackResult time. */
                public time: number;

                /** TimeAttackResult course. */
                public course: number;

                /** TimeAttackResult section_1Time. */
                public section_1Time: number;

                /** TimeAttackResult section_2Time. */
                public section_2Time: number;

                /** TimeAttackResult section_3Time. */
                public section_3Time: number;

                /** TimeAttackResult section_4Time. */
                public section_4Time: number;

                /** TimeAttackResult section_5Time. */
                public section_5Time: number;

                /** TimeAttackResult section_6Time. */
                public section_6Time: number;

                /** TimeAttackResult section_7Time. */
                public section_7Time: number;

                /** TimeAttackResult wholeRank. */
                public wholeRank: number;

                /** TimeAttackResult modelRank. */
                public modelRank: number;

                /**
                 * Creates a new TimeAttackResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimeAttackResult instance
                 */
                public static create(properties?: wm5.protobuf.SaveGameResultRequest.ITimeAttackResult): wm5.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Encodes the specified TimeAttackResult message. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimeAttackResult message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.TimeAttackResult.verify|verify} messages.
                 * @param message TimeAttackResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveGameResultRequest.ITimeAttackResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Decodes a TimeAttackResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimeAttackResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Verifies a TimeAttackResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimeAttackResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimeAttackResult
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultRequest.TimeAttackResult;

                /**
                 * Creates a plain object from a TimeAttackResult message. Also converts values to other types if specified.
                 * @param message TimeAttackResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveGameResultRequest.TimeAttackResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimeAttackResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TimeAttackResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VersusBattleResult. */
            interface IVersusBattleResult {

                /** VersusBattleResult result */
                result: number;

                /** VersusBattleResult survived */
                survived: boolean;

                /** VersusBattleResult opponentCarId */
                opponentCarId?: (number[]|null);

                /** VersusBattleResult extremeMode */
                extremeMode: boolean;

                /** VersusBattleResult numOfPlayers */
                numOfPlayers: number;

                /** VersusBattleResult vsPlayCount */
                vsPlayCount: number;

                /** VersusBattleResult vsBurstCount */
                vsBurstCount?: (number|null);

                /** VersusBattleResult vsStarCount */
                vsStarCount?: (number|null);

                /** VersusBattleResult vsCoolOrWild */
                vsCoolOrWild?: (number|null);

                /** VersusBattleResult vsSmoothOrRough */
                vsSmoothOrRough?: (number|null);

                /** VersusBattleResult vsTripleStarMedals */
                vsTripleStarMedals?: (number|null);

                /** VersusBattleResult vsDoubleStarMedals */
                vsDoubleStarMedals?: (number|null);

                /** VersusBattleResult vsSingleStarMedals */
                vsSingleStarMedals?: (number|null);

                /** VersusBattleResult vsPlainMedals */
                vsPlainMedals?: (number|null);

                /** VersusBattleResult bingoEventId */
                bingoEventId?: (number|null);

                /** VersusBattleResult bingoCardId */
                bingoCardId?: (number|null);
            }

            /** Represents a VersusBattleResult. */
            class VersusBattleResult implements IVersusBattleResult {

                /**
                 * Constructs a new VersusBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveGameResultRequest.IVersusBattleResult);

                /** VersusBattleResult result. */
                public result: number;

                /** VersusBattleResult survived. */
                public survived: boolean;

                /** VersusBattleResult opponentCarId. */
                public opponentCarId: number[];

                /** VersusBattleResult extremeMode. */
                public extremeMode: boolean;

                /** VersusBattleResult numOfPlayers. */
                public numOfPlayers: number;

                /** VersusBattleResult vsPlayCount. */
                public vsPlayCount: number;

                /** VersusBattleResult vsBurstCount. */
                public vsBurstCount: number;

                /** VersusBattleResult vsStarCount. */
                public vsStarCount: number;

                /** VersusBattleResult vsCoolOrWild. */
                public vsCoolOrWild: number;

                /** VersusBattleResult vsSmoothOrRough. */
                public vsSmoothOrRough: number;

                /** VersusBattleResult vsTripleStarMedals. */
                public vsTripleStarMedals: number;

                /** VersusBattleResult vsDoubleStarMedals. */
                public vsDoubleStarMedals: number;

                /** VersusBattleResult vsSingleStarMedals. */
                public vsSingleStarMedals: number;

                /** VersusBattleResult vsPlainMedals. */
                public vsPlainMedals: number;

                /** VersusBattleResult bingoEventId. */
                public bingoEventId: number;

                /** VersusBattleResult bingoCardId. */
                public bingoCardId: number;

                /**
                 * Creates a new VersusBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VersusBattleResult instance
                 */
                public static create(properties?: wm5.protobuf.SaveGameResultRequest.IVersusBattleResult): wm5.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Encodes the specified VersusBattleResult message. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VersusBattleResult message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.VersusBattleResult.verify|verify} messages.
                 * @param message VersusBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveGameResultRequest.IVersusBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Decodes a VersusBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VersusBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Verifies a VersusBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VersusBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VersusBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultRequest.VersusBattleResult;

                /**
                 * Creates a plain object from a VersusBattleResult message. Also converts values to other types if specified.
                 * @param message VersusBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveGameResultRequest.VersusBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VersusBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VersusBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a GhostBattleResult. */
            interface IGhostBattleResult {

                /** GhostBattleResult result */
                result: number;

                /** GhostBattleResult opponentCarId */
                opponentCarId: number;

                /** GhostBattleResult area */
                area: number;

                /** GhostBattleResult selectionMethod */
                selectionMethod: wm5.protobuf.GhostSelectionMethod;

                /** GhostBattleResult stampSheetCount */
                stampSheetCount?: (number|null);

                /** GhostBattleResult stampSheet */
                stampSheet?: (number[]|null);

                /** GhostBattleResult stampReturnLevel */
                stampReturnLevel?: (number|null);

                /** GhostBattleResult receiveStamp */
                receiveStamp?: (boolean|null);

                /** GhostBattleResult rgStamp */
                rgStamp?: (number|null);

                /** GhostBattleResult rgPlayCount */
                rgPlayCount: number;

                /** GhostBattleResult rgWinCount */
                rgWinCount?: (number|null);

                /** GhostBattleResult maxiCoin */
                maxiCoin?: (number|null);

                /** GhostBattleResult shopPoint */
                shopPoint?: (number|null);

                /** GhostBattleResult shopGrade */
                shopGrade?: (number|null);

                /** GhostBattleResult rgBlock */
                rgBlock?: (number|null);

                /** GhostBattleResult rgProgress */
                rgProgress?: (number[]|null);

                /** GhostBattleResult rgClearCount */
                rgClearCount?: (number|null);

                /** GhostBattleResult competitionId */
                competitionId?: (number|null);

                /** GhostBattleResult periodId */
                periodId?: (number|null);

                /** GhostBattleResult brakingPoint */
                brakingPoint?: (number|null);

                /** GhostBattleResult usedMaxiGoldBoostItem */
                usedMaxiGoldBoostItem?: (boolean|null);

                /** GhostBattleResult acquireCrown */
                acquireCrown?: (boolean|null);

                /** GhostBattleResult acquireAllCrowns */
                acquireAllCrowns?: (boolean|null);
            }

            /** Represents a GhostBattleResult. */
            class GhostBattleResult implements IGhostBattleResult {

                /**
                 * Constructs a new GhostBattleResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveGameResultRequest.IGhostBattleResult);

                /** GhostBattleResult result. */
                public result: number;

                /** GhostBattleResult opponentCarId. */
                public opponentCarId: number;

                /** GhostBattleResult area. */
                public area: number;

                /** GhostBattleResult selectionMethod. */
                public selectionMethod: wm5.protobuf.GhostSelectionMethod;

                /** GhostBattleResult stampSheetCount. */
                public stampSheetCount: number;

                /** GhostBattleResult stampSheet. */
                public stampSheet: number[];

                /** GhostBattleResult stampReturnLevel. */
                public stampReturnLevel: number;

                /** GhostBattleResult receiveStamp. */
                public receiveStamp: boolean;

                /** GhostBattleResult rgStamp. */
                public rgStamp: number;

                /** GhostBattleResult rgPlayCount. */
                public rgPlayCount: number;

                /** GhostBattleResult rgWinCount. */
                public rgWinCount: number;

                /** GhostBattleResult maxiCoin. */
                public maxiCoin: number;

                /** GhostBattleResult shopPoint. */
                public shopPoint: number;

                /** GhostBattleResult shopGrade. */
                public shopGrade: number;

                /** GhostBattleResult rgBlock. */
                public rgBlock: number;

                /** GhostBattleResult rgProgress. */
                public rgProgress: number[];

                /** GhostBattleResult rgClearCount. */
                public rgClearCount: number;

                /** GhostBattleResult competitionId. */
                public competitionId: number;

                /** GhostBattleResult periodId. */
                public periodId: number;

                /** GhostBattleResult brakingPoint. */
                public brakingPoint: number;

                /** GhostBattleResult usedMaxiGoldBoostItem. */
                public usedMaxiGoldBoostItem: boolean;

                /** GhostBattleResult acquireCrown. */
                public acquireCrown: boolean;

                /** GhostBattleResult acquireAllCrowns. */
                public acquireAllCrowns: boolean;

                /**
                 * Creates a new GhostBattleResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleResult instance
                 */
                public static create(properties?: wm5.protobuf.SaveGameResultRequest.IGhostBattleResult): wm5.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Encodes the specified GhostBattleResult message. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleResult message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultRequest.GhostBattleResult.verify|verify} messages.
                 * @param message GhostBattleResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveGameResultRequest.IGhostBattleResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Decodes a GhostBattleResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Verifies a GhostBattleResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleResult
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultRequest.GhostBattleResult;

                /**
                 * Creates a plain object from a GhostBattleResult message. Also converts values to other types if specified.
                 * @param message GhostBattleResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveGameResultRequest.GhostBattleResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleResult
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveGameResultResponse. */
        interface ISaveGameResultResponse {

            /** SaveGameResultResponse error */
            error: wm5.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId */
            ghostSessionId?: (number|Long|null);
        }

        /** Represents a SaveGameResultResponse. */
        class SaveGameResultResponse implements ISaveGameResultResponse {

            /**
             * Constructs a new SaveGameResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveGameResultResponse);

            /** SaveGameResultResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** SaveGameResultResponse ghostSessionId. */
            public ghostSessionId: (number|Long);

            /**
             * Creates a new SaveGameResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveGameResultResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveGameResultResponse): wm5.protobuf.SaveGameResultResponse;

            /**
             * Encodes the specified SaveGameResultResponse message. Does not implicitly {@link wm5.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveGameResultResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveGameResultResponse.verify|verify} messages.
             * @param message SaveGameResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveGameResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveGameResultResponse;

            /**
             * Decodes a SaveGameResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveGameResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveGameResultResponse;

            /**
             * Verifies a SaveGameResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveGameResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveGameResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveGameResultResponse;

            /**
             * Creates a plain object from a SaveGameResultResponse message. Also converts values to other types if specified.
             * @param message SaveGameResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveGameResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveGameResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveGameResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveChargeRequest. */
        interface ISaveChargeRequest {

            /** SaveChargeRequest chargeLogs */
            chargeLogs?: (wm5.protobuf.SaveChargeRequest.IChargeLog[]|null);
        }

        /** Represents a SaveChargeRequest. */
        class SaveChargeRequest implements ISaveChargeRequest {

            /**
             * Constructs a new SaveChargeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveChargeRequest);

            /** SaveChargeRequest chargeLogs. */
            public chargeLogs: wm5.protobuf.SaveChargeRequest.IChargeLog[];

            /**
             * Creates a new SaveChargeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveChargeRequest): wm5.protobuf.SaveChargeRequest;

            /**
             * Encodes the specified SaveChargeRequest message. Does not implicitly {@link wm5.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveChargeRequest.verify|verify} messages.
             * @param message SaveChargeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveChargeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveChargeRequest;

            /**
             * Decodes a SaveChargeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveChargeRequest;

            /**
             * Verifies a SaveChargeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveChargeRequest;

            /**
             * Creates a plain object from a SaveChargeRequest message. Also converts values to other types if specified.
             * @param message SaveChargeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveChargeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveChargeRequest {

            /** Properties of a ChargeLog. */
            interface IChargeLog {

                /** ChargeLog datetime */
                datetime: number;

                /** ChargeLog pcbSerial */
                pcbSerial: string;

                /** ChargeLog placeId */
                placeId: string;

                /** ChargeLog userId */
                userId?: (number|null);
            }

            /** Represents a ChargeLog. */
            class ChargeLog implements IChargeLog {

                /**
                 * Constructs a new ChargeLog.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveChargeRequest.IChargeLog);

                /** ChargeLog datetime. */
                public datetime: number;

                /** ChargeLog pcbSerial. */
                public pcbSerial: string;

                /** ChargeLog placeId. */
                public placeId: string;

                /** ChargeLog userId. */
                public userId: number;

                /**
                 * Creates a new ChargeLog instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ChargeLog instance
                 */
                public static create(properties?: wm5.protobuf.SaveChargeRequest.IChargeLog): wm5.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Encodes the specified ChargeLog message. Does not implicitly {@link wm5.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ChargeLog message, length delimited. Does not implicitly {@link wm5.protobuf.SaveChargeRequest.ChargeLog.verify|verify} messages.
                 * @param message ChargeLog message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveChargeRequest.IChargeLog, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Decodes a ChargeLog message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ChargeLog
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Verifies a ChargeLog message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ChargeLog message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ChargeLog
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveChargeRequest.ChargeLog;

                /**
                 * Creates a plain object from a ChargeLog message. Also converts values to other types if specified.
                 * @param message ChargeLog
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveChargeRequest.ChargeLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ChargeLog to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ChargeLog
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveChargeResponse. */
        interface ISaveChargeResponse {

            /** SaveChargeResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveChargeResponse. */
        class SaveChargeResponse implements ISaveChargeResponse {

            /**
             * Constructs a new SaveChargeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveChargeResponse);

            /** SaveChargeResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveChargeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveChargeResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveChargeResponse): wm5.protobuf.SaveChargeResponse;

            /**
             * Encodes the specified SaveChargeResponse message. Does not implicitly {@link wm5.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveChargeResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveChargeResponse.verify|verify} messages.
             * @param message SaveChargeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveChargeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveChargeResponse;

            /**
             * Decodes a SaveChargeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveChargeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveChargeResponse;

            /**
             * Verifies a SaveChargeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveChargeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveChargeResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveChargeResponse;

            /**
             * Creates a plain object from a SaveChargeResponse message. Also converts values to other types if specified.
             * @param message SaveChargeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveChargeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveChargeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveChargeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoRequest. */
        interface ILoadGhostBattleInfoRequest {

            /** LoadGhostBattleInfoRequest carId */
            carId: number;
        }

        /** Represents a LoadGhostBattleInfoRequest. */
        class LoadGhostBattleInfoRequest implements ILoadGhostBattleInfoRequest {

            /**
             * Constructs a new LoadGhostBattleInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostBattleInfoRequest);

            /** LoadGhostBattleInfoRequest carId. */
            public carId: number;

            /**
             * Creates a new LoadGhostBattleInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostBattleInfoRequest): wm5.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message. Does not implicitly {@link wm5.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostBattleInfoRequest.verify|verify} messages.
             * @param message LoadGhostBattleInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostBattleInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Decodes a LoadGhostBattleInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Verifies a LoadGhostBattleInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostBattleInfoRequest;

            /**
             * Creates a plain object from a LoadGhostBattleInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostBattleInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostBattleInfoResponse. */
        interface ILoadGhostBattleInfoResponse {

            /** LoadGhostBattleInfoResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars */
            friendCars?: (wm5.protobuf.IFriendCar[]|null);

            /** LoadGhostBattleInfoResponse challengers */
            challengers?: (wm5.protobuf.IChallengerCar[]|null);

            /** LoadGhostBattleInfoResponse stampTargetCars */
            stampTargetCars?: (wm5.protobuf.IStampTargetCar[]|null);

            /** LoadGhostBattleInfoResponse history */
            history?: (wm5.protobuf.ICar[]|null);

            /** LoadGhostBattleInfoResponse defaultOpponent */
            defaultOpponent?: (wm5.protobuf.IGhostCar|null);

            /** LoadGhostBattleInfoResponse stampSheetCount */
            stampSheetCount: number;

            /** LoadGhostBattleInfoResponse stampSheet */
            stampSheet?: (number[]|null);

            /** LoadGhostBattleInfoResponse stampReturnStats */
            stampReturnStats?: (number[]|null);

            /** LoadGhostBattleInfoResponse specialGhost */
            specialGhost?: (wm5.protobuf.IGhostCar|null);
        }

        /** Represents a LoadGhostBattleInfoResponse. */
        class LoadGhostBattleInfoResponse implements ILoadGhostBattleInfoResponse {

            /**
             * Constructs a new LoadGhostBattleInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostBattleInfoResponse);

            /** LoadGhostBattleInfoResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadGhostBattleInfoResponse friendCars. */
            public friendCars: wm5.protobuf.IFriendCar[];

            /** LoadGhostBattleInfoResponse challengers. */
            public challengers: wm5.protobuf.IChallengerCar[];

            /** LoadGhostBattleInfoResponse stampTargetCars. */
            public stampTargetCars: wm5.protobuf.IStampTargetCar[];

            /** LoadGhostBattleInfoResponse history. */
            public history: wm5.protobuf.ICar[];

            /** LoadGhostBattleInfoResponse defaultOpponent. */
            public defaultOpponent?: (wm5.protobuf.IGhostCar|null);

            /** LoadGhostBattleInfoResponse stampSheetCount. */
            public stampSheetCount: number;

            /** LoadGhostBattleInfoResponse stampSheet. */
            public stampSheet: number[];

            /** LoadGhostBattleInfoResponse stampReturnStats. */
            public stampReturnStats: number[];

            /** LoadGhostBattleInfoResponse specialGhost. */
            public specialGhost?: (wm5.protobuf.IGhostCar|null);

            /**
             * Creates a new LoadGhostBattleInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostBattleInfoResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostBattleInfoResponse): wm5.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message. Does not implicitly {@link wm5.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostBattleInfoResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostBattleInfoResponse.verify|verify} messages.
             * @param message LoadGhostBattleInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostBattleInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Decodes a LoadGhostBattleInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostBattleInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Verifies a LoadGhostBattleInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostBattleInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostBattleInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostBattleInfoResponse;

            /**
             * Creates a plain object from a LoadGhostBattleInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostBattleInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostBattleInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostBattleInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostBattleInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadStampTargetRequest. */
        interface ILoadStampTargetRequest {

            /** LoadStampTargetRequest carId */
            carId: number;

            /** LoadStampTargetRequest needToPromote */
            needToPromote: boolean;
        }

        /** Represents a LoadStampTargetRequest. */
        class LoadStampTargetRequest implements ILoadStampTargetRequest {

            /**
             * Constructs a new LoadStampTargetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadStampTargetRequest);

            /** LoadStampTargetRequest carId. */
            public carId: number;

            /** LoadStampTargetRequest needToPromote. */
            public needToPromote: boolean;

            /**
             * Creates a new LoadStampTargetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadStampTargetRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadStampTargetRequest): wm5.protobuf.LoadStampTargetRequest;

            /**
             * Encodes the specified LoadStampTargetRequest message. Does not implicitly {@link wm5.protobuf.LoadStampTargetRequest.verify|verify} messages.
             * @param message LoadStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadStampTargetRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadStampTargetRequest.verify|verify} messages.
             * @param message LoadStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadStampTargetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadStampTargetRequest;

            /**
             * Decodes a LoadStampTargetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadStampTargetRequest;

            /**
             * Verifies a LoadStampTargetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadStampTargetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadStampTargetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadStampTargetRequest;

            /**
             * Creates a plain object from a LoadStampTargetRequest message. Also converts values to other types if specified.
             * @param message LoadStampTargetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadStampTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadStampTargetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadStampTargetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadStampTargetResponse. */
        interface ILoadStampTargetResponse {

            /** LoadStampTargetResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadStampTargetResponse cars */
            cars?: (wm5.protobuf.IStampTargetCar[]|null);

            /** LoadStampTargetResponse challengers */
            challengers?: (wm5.protobuf.IChallengerCar[]|null);
        }

        /** Represents a LoadStampTargetResponse. */
        class LoadStampTargetResponse implements ILoadStampTargetResponse {

            /**
             * Constructs a new LoadStampTargetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadStampTargetResponse);

            /** LoadStampTargetResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadStampTargetResponse cars. */
            public cars: wm5.protobuf.IStampTargetCar[];

            /** LoadStampTargetResponse challengers. */
            public challengers: wm5.protobuf.IChallengerCar[];

            /**
             * Creates a new LoadStampTargetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadStampTargetResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadStampTargetResponse): wm5.protobuf.LoadStampTargetResponse;

            /**
             * Encodes the specified LoadStampTargetResponse message. Does not implicitly {@link wm5.protobuf.LoadStampTargetResponse.verify|verify} messages.
             * @param message LoadStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadStampTargetResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadStampTargetResponse.verify|verify} messages.
             * @param message LoadStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadStampTargetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadStampTargetResponse;

            /**
             * Decodes a LoadStampTargetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadStampTargetResponse;

            /**
             * Verifies a LoadStampTargetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadStampTargetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadStampTargetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadStampTargetResponse;

            /**
             * Creates a plain object from a LoadStampTargetResponse message. Also converts values to other types if specified.
             * @param message LoadStampTargetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadStampTargetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadStampTargetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadStampTargetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockStampTargetRequest. */
        interface ILockStampTargetRequest {

            /** LockStampTargetRequest carId */
            carId: number;

            /** LockStampTargetRequest targetCars */
            targetCars?: (number[]|null);
        }

        /** Represents a LockStampTargetRequest. */
        class LockStampTargetRequest implements ILockStampTargetRequest {

            /**
             * Constructs a new LockStampTargetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILockStampTargetRequest);

            /** LockStampTargetRequest carId. */
            public carId: number;

            /** LockStampTargetRequest targetCars. */
            public targetCars: number[];

            /**
             * Creates a new LockStampTargetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockStampTargetRequest instance
             */
            public static create(properties?: wm5.protobuf.ILockStampTargetRequest): wm5.protobuf.LockStampTargetRequest;

            /**
             * Encodes the specified LockStampTargetRequest message. Does not implicitly {@link wm5.protobuf.LockStampTargetRequest.verify|verify} messages.
             * @param message LockStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILockStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockStampTargetRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LockStampTargetRequest.verify|verify} messages.
             * @param message LockStampTargetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILockStampTargetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockStampTargetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LockStampTargetRequest;

            /**
             * Decodes a LockStampTargetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockStampTargetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LockStampTargetRequest;

            /**
             * Verifies a LockStampTargetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockStampTargetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockStampTargetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LockStampTargetRequest;

            /**
             * Creates a plain object from a LockStampTargetRequest message. Also converts values to other types if specified.
             * @param message LockStampTargetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LockStampTargetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockStampTargetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockStampTargetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LockStampTargetResponse. */
        interface ILockStampTargetResponse {

            /** LockStampTargetResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a LockStampTargetResponse. */
        class LockStampTargetResponse implements ILockStampTargetResponse {

            /**
             * Constructs a new LockStampTargetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILockStampTargetResponse);

            /** LockStampTargetResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new LockStampTargetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockStampTargetResponse instance
             */
            public static create(properties?: wm5.protobuf.ILockStampTargetResponse): wm5.protobuf.LockStampTargetResponse;

            /**
             * Encodes the specified LockStampTargetResponse message. Does not implicitly {@link wm5.protobuf.LockStampTargetResponse.verify|verify} messages.
             * @param message LockStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILockStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockStampTargetResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LockStampTargetResponse.verify|verify} messages.
             * @param message LockStampTargetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILockStampTargetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockStampTargetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LockStampTargetResponse;

            /**
             * Decodes a LockStampTargetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockStampTargetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LockStampTargetResponse;

            /**
             * Verifies a LockStampTargetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockStampTargetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockStampTargetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LockStampTargetResponse;

            /**
             * Creates a plain object from a LockStampTargetResponse message. Also converts values to other types if specified.
             * @param message LockStampTargetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LockStampTargetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockStampTargetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LockStampTargetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoRequest. */
        interface ILoadGhostCompetitionInfoRequest {

            /** LoadGhostCompetitionInfoRequest carId */
            carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionInfoRequest. */
        class LoadGhostCompetitionInfoRequest implements ILoadGhostCompetitionInfoRequest {

            /**
             * Constructs a new LoadGhostCompetitionInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostCompetitionInfoRequest);

            /** LoadGhostCompetitionInfoRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionInfoRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostCompetitionInfoRequest): wm5.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionInfoRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostCompetitionInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Decodes a LoadGhostCompetitionInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Verifies a LoadGhostCompetitionInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostCompetitionInfoRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostCompetitionInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionInfoResponse. */
        interface ILoadGhostCompetitionInfoResponse {

            /** LoadGhostCompetitionInfoResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionInfoResponse closed */
            closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint */
            brakingPoint?: (number|null);

            /** LoadGhostCompetitionInfoResponse qualified */
            qualified?: (boolean|null);

            /** LoadGhostCompetitionInfoResponse topResults */
            topResults?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse result */
            result?: (number|null);

            /** LoadGhostCompetitionInfoResponse rank */
            rank?: (number|null);

            /** LoadGhostCompetitionInfoResponse parameters1 */
            parameters1?: (number[]|null);

            /** LoadGhostCompetitionInfoResponse parameters2 */
            parameters2?: (boolean|null);
        }

        /** Represents a LoadGhostCompetitionInfoResponse. */
        class LoadGhostCompetitionInfoResponse implements ILoadGhostCompetitionInfoResponse {

            /**
             * Constructs a new LoadGhostCompetitionInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostCompetitionInfoResponse);

            /** LoadGhostCompetitionInfoResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadGhostCompetitionInfoResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionInfoResponse closed. */
            public closed: boolean;

            /** LoadGhostCompetitionInfoResponse brakingPoint. */
            public brakingPoint: number;

            /** LoadGhostCompetitionInfoResponse qualified. */
            public qualified: boolean;

            /** LoadGhostCompetitionInfoResponse topResults. */
            public topResults: number[];

            /** LoadGhostCompetitionInfoResponse result. */
            public result: number;

            /** LoadGhostCompetitionInfoResponse rank. */
            public rank: number;

            /** LoadGhostCompetitionInfoResponse parameters1. */
            public parameters1: number[];

            /** LoadGhostCompetitionInfoResponse parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new LoadGhostCompetitionInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionInfoResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostCompetitionInfoResponse): wm5.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionInfoResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionInfoResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostCompetitionInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Decodes a LoadGhostCompetitionInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Verifies a LoadGhostCompetitionInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostCompetitionInfoResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionInfoResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostCompetitionInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordRequest. */
        interface ILoadTimeAttackRecordRequest {

            /** LoadTimeAttackRecordRequest carId */
            carId?: (number|null);

            /** LoadTimeAttackRecordRequest model */
            model: number;

            /** LoadTimeAttackRecordRequest course */
            course: number;
        }

        /** Represents a LoadTimeAttackRecordRequest. */
        class LoadTimeAttackRecordRequest implements ILoadTimeAttackRecordRequest {

            /**
             * Constructs a new LoadTimeAttackRecordRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTimeAttackRecordRequest);

            /** LoadTimeAttackRecordRequest carId. */
            public carId: number;

            /** LoadTimeAttackRecordRequest model. */
            public model: number;

            /** LoadTimeAttackRecordRequest course. */
            public course: number;

            /**
             * Creates a new LoadTimeAttackRecordRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadTimeAttackRecordRequest): wm5.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message. Does not implicitly {@link wm5.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTimeAttackRecordRequest.verify|verify} messages.
             * @param message LoadTimeAttackRecordRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTimeAttackRecordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Decodes a LoadTimeAttackRecordRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Verifies a LoadTimeAttackRecordRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTimeAttackRecordRequest;

            /**
             * Creates a plain object from a LoadTimeAttackRecordRequest message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTimeAttackRecordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTimeAttackRecordResponse. */
        interface ILoadTimeAttackRecordResponse {

            /** LoadTimeAttackRecordResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking */
            wholeRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse modelRanking */
            modelRanking?: (number[]|null);

            /** LoadTimeAttackRecordResponse personalBestTime */
            personalBestTime?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_1Time */
            pbSection_1Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_2Time */
            pbSection_2Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_3Time */
            pbSection_3Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_4Time */
            pbSection_4Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_5Time */
            pbSection_5Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_6Time */
            pbSection_6Time?: (number|null);

            /** LoadTimeAttackRecordResponse pbSection_7Time */
            pbSection_7Time?: (number|null);
        }

        /** Represents a LoadTimeAttackRecordResponse. */
        class LoadTimeAttackRecordResponse implements ILoadTimeAttackRecordResponse {

            /**
             * Constructs a new LoadTimeAttackRecordResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTimeAttackRecordResponse);

            /** LoadTimeAttackRecordResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadTimeAttackRecordResponse wholeRanking. */
            public wholeRanking: number[];

            /** LoadTimeAttackRecordResponse modelRanking. */
            public modelRanking: number[];

            /** LoadTimeAttackRecordResponse personalBestTime. */
            public personalBestTime: number;

            /** LoadTimeAttackRecordResponse pbSection_1Time. */
            public pbSection_1Time: number;

            /** LoadTimeAttackRecordResponse pbSection_2Time. */
            public pbSection_2Time: number;

            /** LoadTimeAttackRecordResponse pbSection_3Time. */
            public pbSection_3Time: number;

            /** LoadTimeAttackRecordResponse pbSection_4Time. */
            public pbSection_4Time: number;

            /** LoadTimeAttackRecordResponse pbSection_5Time. */
            public pbSection_5Time: number;

            /** LoadTimeAttackRecordResponse pbSection_6Time. */
            public pbSection_6Time: number;

            /** LoadTimeAttackRecordResponse pbSection_7Time. */
            public pbSection_7Time: number;

            /**
             * Creates a new LoadTimeAttackRecordResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTimeAttackRecordResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadTimeAttackRecordResponse): wm5.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message. Does not implicitly {@link wm5.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTimeAttackRecordResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTimeAttackRecordResponse.verify|verify} messages.
             * @param message LoadTimeAttackRecordResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTimeAttackRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Decodes a LoadTimeAttackRecordResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTimeAttackRecordResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Verifies a LoadTimeAttackRecordResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTimeAttackRecordResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTimeAttackRecordResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTimeAttackRecordResponse;

            /**
             * Creates a plain object from a LoadTimeAttackRecordResponse message. Also converts values to other types if specified.
             * @param message LoadTimeAttackRecordResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTimeAttackRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTimeAttackRecordResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTimeAttackRecordResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultRequest. */
        interface ISaveTerminalResultRequest {

            /** SaveTerminalResultRequest userId */
            userId: number;

            /** SaveTerminalResultRequest timestamp */
            timestamp: number;

            /** SaveTerminalResultRequest carOrder */
            carOrder?: (number[]|null);

            /** SaveTerminalResultRequest teamCarId */
            teamCarId?: (number|null);

            /** SaveTerminalResultRequest confirmedTutorials */
            confirmedTutorials?: (wm5.protobuf.TutorialType[]|null);

            /** SaveTerminalResultRequest teamNoticesConfirmed */
            teamNoticesConfirmed?: (boolean|null);

            /** SaveTerminalResultRequest teamMenuEntered */
            teamMenuEntered?: (boolean|null);

            /** SaveTerminalResultRequest garageMenuEntered */
            garageMenuEntered?: (boolean|null);
        }

        /** Represents a SaveTerminalResultRequest. */
        class SaveTerminalResultRequest implements ISaveTerminalResultRequest {

            /**
             * Constructs a new SaveTerminalResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveTerminalResultRequest);

            /** SaveTerminalResultRequest userId. */
            public userId: number;

            /** SaveTerminalResultRequest timestamp. */
            public timestamp: number;

            /** SaveTerminalResultRequest carOrder. */
            public carOrder: number[];

            /** SaveTerminalResultRequest teamCarId. */
            public teamCarId: number;

            /** SaveTerminalResultRequest confirmedTutorials. */
            public confirmedTutorials: wm5.protobuf.TutorialType[];

            /** SaveTerminalResultRequest teamNoticesConfirmed. */
            public teamNoticesConfirmed: boolean;

            /** SaveTerminalResultRequest teamMenuEntered. */
            public teamMenuEntered: boolean;

            /** SaveTerminalResultRequest garageMenuEntered. */
            public garageMenuEntered: boolean;

            /**
             * Creates a new SaveTerminalResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveTerminalResultRequest): wm5.protobuf.SaveTerminalResultRequest;

            /**
             * Encodes the specified SaveTerminalResultRequest message. Does not implicitly {@link wm5.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveTerminalResultRequest.verify|verify} messages.
             * @param message SaveTerminalResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveTerminalResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveTerminalResultRequest;

            /**
             * Decodes a SaveTerminalResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveTerminalResultRequest;

            /**
             * Verifies a SaveTerminalResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveTerminalResultRequest;

            /**
             * Creates a plain object from a SaveTerminalResultRequest message. Also converts values to other types if specified.
             * @param message SaveTerminalResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveTerminalResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveTerminalResultResponse. */
        interface ISaveTerminalResultResponse {

            /** SaveTerminalResultResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveTerminalResultResponse. */
        class SaveTerminalResultResponse implements ISaveTerminalResultResponse {

            /**
             * Constructs a new SaveTerminalResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveTerminalResultResponse);

            /** SaveTerminalResultResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveTerminalResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveTerminalResultResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveTerminalResultResponse): wm5.protobuf.SaveTerminalResultResponse;

            /**
             * Encodes the specified SaveTerminalResultResponse message. Does not implicitly {@link wm5.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveTerminalResultResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveTerminalResultResponse.verify|verify} messages.
             * @param message SaveTerminalResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveTerminalResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveTerminalResultResponse;

            /**
             * Decodes a SaveTerminalResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveTerminalResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveTerminalResultResponse;

            /**
             * Verifies a SaveTerminalResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveTerminalResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveTerminalResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveTerminalResultResponse;

            /**
             * Creates a plain object from a SaveTerminalResultResponse message. Also converts values to other types if specified.
             * @param message SaveTerminalResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveTerminalResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveTerminalResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveTerminalResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingRequest. */
        interface IPingRequest {

            /** PingRequest ping */
            ping?: (number|null);
        }

        /** Represents a PingRequest. */
        class PingRequest implements IPingRequest {

            /**
             * Constructs a new PingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IPingRequest);

            /** PingRequest ping. */
            public ping: number;

            /**
             * Creates a new PingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingRequest instance
             */
            public static create(properties?: wm5.protobuf.IPingRequest): wm5.protobuf.PingRequest;

            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link wm5.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link wm5.protobuf.PingRequest.verify|verify} messages.
             * @param message PingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.PingRequest;

            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.PingRequest;

            /**
             * Verifies a PingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.PingRequest;

            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @param message PingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PingResponse. */
        interface IPingResponse {

            /** PingResponse error */
            error: wm5.protobuf.ErrorCode;

            /** PingResponse pong */
            pong: number;

            /** PingResponse bnidServerAvailable */
            bnidServerAvailable?: (boolean|null);

            /** PingResponse banacoinAvailable */
            banacoinAvailable?: (boolean|null);
        }

        /** Represents a PingResponse. */
        class PingResponse implements IPingResponse {

            /**
             * Constructs a new PingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IPingResponse);

            /** PingResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** PingResponse pong. */
            public pong: number;

            /** PingResponse bnidServerAvailable. */
            public bnidServerAvailable: boolean;

            /** PingResponse banacoinAvailable. */
            public banacoinAvailable: boolean;

            /**
             * Creates a new PingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PingResponse instance
             */
            public static create(properties?: wm5.protobuf.IPingResponse): wm5.protobuf.PingResponse;

            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link wm5.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link wm5.protobuf.PingResponse.verify|verify} messages.
             * @param message PingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.PingResponse;

            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.PingResponse;

            /**
             * Verifies a PingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PingResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.PingResponse;

            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @param message PingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTerminalInformationRequest. */
        interface ILoadTerminalInformationRequest {

            /** LoadTerminalInformationRequest userId */
            userId: number;
        }

        /** Represents a LoadTerminalInformationRequest. */
        class LoadTerminalInformationRequest implements ILoadTerminalInformationRequest {

            /**
             * Constructs a new LoadTerminalInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTerminalInformationRequest);

            /** LoadTerminalInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadTerminalInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTerminalInformationRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadTerminalInformationRequest): wm5.protobuf.LoadTerminalInformationRequest;

            /**
             * Encodes the specified LoadTerminalInformationRequest message. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationRequest.verify|verify} messages.
             * @param message LoadTerminalInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTerminalInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTerminalInformationRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationRequest.verify|verify} messages.
             * @param message LoadTerminalInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTerminalInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTerminalInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTerminalInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTerminalInformationRequest;

            /**
             * Decodes a LoadTerminalInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTerminalInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTerminalInformationRequest;

            /**
             * Verifies a LoadTerminalInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTerminalInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTerminalInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTerminalInformationRequest;

            /**
             * Creates a plain object from a LoadTerminalInformationRequest message. Also converts values to other types if specified.
             * @param message LoadTerminalInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTerminalInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTerminalInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTerminalInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTerminalInformationResponse. */
        interface ILoadTerminalInformationResponse {

            /** LoadTerminalInformationResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadTerminalInformationResponse teamCreatedAt */
            teamCreatedAt?: (number|null);

            /** LoadTerminalInformationResponse teamApplying */
            teamApplying?: (boolean|null);

            /** LoadTerminalInformationResponse team */
            team?: (wm5.protobuf.ITeam|null);

            /** LoadTerminalInformationResponse numOfPendingMembers */
            numOfPendingMembers?: (number|null);

            /** LoadTerminalInformationResponse teamNewsEntries */
            teamNewsEntries?: (wm5.protobuf.LoadTerminalInformationResponse.ITeamNews[]|null);

            /** LoadTerminalInformationResponse applicants */
            applicants?: (wm5.protobuf.ITeamApplicant[]|null);

            /** LoadTerminalInformationResponse teamCarId */
            teamCarId?: (number|null);

            /** LoadTerminalInformationResponse maxiGoldReceivable */
            maxiGoldReceivable: boolean;

            /** LoadTerminalInformationResponse prizeReceivable */
            prizeReceivable: boolean;

            /** LoadTerminalInformationResponse noticeEntries */
            noticeEntries?: (wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice[]|null);

            /** LoadTerminalInformationResponse noticeMessage */
            noticeMessage?: (string[]|null);

            /** LoadTerminalInformationResponse noticeWindow */
            noticeWindow?: (wm5.protobuf.NoticeEntry[]|null);

            /** LoadTerminalInformationResponse noticeWindowMessage */
            noticeWindowMessage?: (string[]|null);

            /** LoadTerminalInformationResponse transferNotice */
            transferNotice: wm5.protobuf.ITransferNotice;

            /** LoadTerminalInformationResponse announceFeature */
            announceFeature: boolean;

            /** LoadTerminalInformationResponse freeScratched */
            freeScratched: boolean;
        }

        /** Represents a LoadTerminalInformationResponse. */
        class LoadTerminalInformationResponse implements ILoadTerminalInformationResponse {

            /**
             * Constructs a new LoadTerminalInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTerminalInformationResponse);

            /** LoadTerminalInformationResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadTerminalInformationResponse teamCreatedAt. */
            public teamCreatedAt: number;

            /** LoadTerminalInformationResponse teamApplying. */
            public teamApplying: boolean;

            /** LoadTerminalInformationResponse team. */
            public team?: (wm5.protobuf.ITeam|null);

            /** LoadTerminalInformationResponse numOfPendingMembers. */
            public numOfPendingMembers: number;

            /** LoadTerminalInformationResponse teamNewsEntries. */
            public teamNewsEntries: wm5.protobuf.LoadTerminalInformationResponse.ITeamNews[];

            /** LoadTerminalInformationResponse applicants. */
            public applicants: wm5.protobuf.ITeamApplicant[];

            /** LoadTerminalInformationResponse teamCarId. */
            public teamCarId: number;

            /** LoadTerminalInformationResponse maxiGoldReceivable. */
            public maxiGoldReceivable: boolean;

            /** LoadTerminalInformationResponse prizeReceivable. */
            public prizeReceivable: boolean;

            /** LoadTerminalInformationResponse noticeEntries. */
            public noticeEntries: wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice[];

            /** LoadTerminalInformationResponse noticeMessage. */
            public noticeMessage: string[];

            /** LoadTerminalInformationResponse noticeWindow. */
            public noticeWindow: wm5.protobuf.NoticeEntry[];

            /** LoadTerminalInformationResponse noticeWindowMessage. */
            public noticeWindowMessage: string[];

            /** LoadTerminalInformationResponse transferNotice. */
            public transferNotice: wm5.protobuf.ITransferNotice;

            /** LoadTerminalInformationResponse announceFeature. */
            public announceFeature: boolean;

            /** LoadTerminalInformationResponse freeScratched. */
            public freeScratched: boolean;

            /**
             * Creates a new LoadTerminalInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTerminalInformationResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadTerminalInformationResponse): wm5.protobuf.LoadTerminalInformationResponse;

            /**
             * Encodes the specified LoadTerminalInformationResponse message. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.verify|verify} messages.
             * @param message LoadTerminalInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTerminalInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTerminalInformationResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.verify|verify} messages.
             * @param message LoadTerminalInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTerminalInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTerminalInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTerminalInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTerminalInformationResponse;

            /**
             * Decodes a LoadTerminalInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTerminalInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTerminalInformationResponse;

            /**
             * Verifies a LoadTerminalInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTerminalInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTerminalInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTerminalInformationResponse;

            /**
             * Creates a plain object from a LoadTerminalInformationResponse message. Also converts values to other types if specified.
             * @param message LoadTerminalInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTerminalInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTerminalInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTerminalInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadTerminalInformationResponse {

            /** Properties of a TeamNews. */
            interface ITeamNews {

                /** TeamNews newsType */
                newsType: wm5.protobuf.TeamNewsEntry;

                /** TeamNews datetime */
                datetime: number;

                /** TeamNews field_1 */
                field_1?: (string|null);

                /** TeamNews field_2 */
                field_2?: (number|null);
            }

            /** Represents a TeamNews. */
            class TeamNews implements ITeamNews {

                /**
                 * Constructs a new TeamNews.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadTerminalInformationResponse.ITeamNews);

                /** TeamNews newsType. */
                public newsType: wm5.protobuf.TeamNewsEntry;

                /** TeamNews datetime. */
                public datetime: number;

                /** TeamNews field_1. */
                public field_1: string;

                /** TeamNews field_2. */
                public field_2: number;

                /**
                 * Creates a new TeamNews instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TeamNews instance
                 */
                public static create(properties?: wm5.protobuf.LoadTerminalInformationResponse.ITeamNews): wm5.protobuf.LoadTerminalInformationResponse.TeamNews;

                /**
                 * Encodes the specified TeamNews message. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.TeamNews.verify|verify} messages.
                 * @param message TeamNews message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadTerminalInformationResponse.ITeamNews, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TeamNews message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.TeamNews.verify|verify} messages.
                 * @param message TeamNews message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadTerminalInformationResponse.ITeamNews, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TeamNews message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TeamNews
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTerminalInformationResponse.TeamNews;

                /**
                 * Decodes a TeamNews message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TeamNews
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTerminalInformationResponse.TeamNews;

                /**
                 * Verifies a TeamNews message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TeamNews message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TeamNews
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTerminalInformationResponse.TeamNews;

                /**
                 * Creates a plain object from a TeamNews message. Also converts values to other types if specified.
                 * @param message TeamNews
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadTerminalInformationResponse.TeamNews, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TeamNews to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TeamNews
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalNotice. */
            interface ITerminalNotice {

                /** TerminalNotice noticeType */
                noticeType: wm5.protobuf.NoticeEntry;

                /** TerminalNotice field_1 */
                field_1?: (string|null);

                /** TerminalNotice field_2 */
                field_2?: (number|null);

                /** TerminalNotice field_3 */
                field_3?: (number|null);
            }

            /** Represents a TerminalNotice. */
            class TerminalNotice implements ITerminalNotice {

                /**
                 * Constructs a new TerminalNotice.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice);

                /** TerminalNotice noticeType. */
                public noticeType: wm5.protobuf.NoticeEntry;

                /** TerminalNotice field_1. */
                public field_1: string;

                /** TerminalNotice field_2. */
                public field_2: number;

                /** TerminalNotice field_3. */
                public field_3: number;

                /**
                 * Creates a new TerminalNotice instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalNotice instance
                 */
                public static create(properties?: wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice): wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Encodes the specified TerminalNotice message. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice.verify|verify} messages.
                 * @param message TerminalNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalNotice message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice.verify|verify} messages.
                 * @param message TerminalNotice message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadTerminalInformationResponse.ITerminalNotice, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalNotice message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Decodes a TerminalNotice message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalNotice
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Verifies a TerminalNotice message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalNotice message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalNotice
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice;

                /**
                 * Creates a plain object from a TerminalNotice message. Also converts values to other types if specified.
                 * @param message TerminalNotice
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadTerminalInformationResponse.TerminalNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalNotice to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalNotice
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a CreateUserRequest. */
        interface ICreateUserRequest {

            /** CreateUserRequest banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserRequest cardChipId */
            cardChipId?: (string|null);

            /** CreateUserRequest accessCode */
            accessCode?: (string|null);

            /** CreateUserRequest cardTypeCode */
            cardTypeCode?: (number|null);

            /** CreateUserRequest cardRegionCode */
            cardRegionCode?: (number|null);

            /** CreateUserRequest device */
            device?: (wm5.protobuf.DeviceType|null);

            /** CreateUserRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateUserRequest. */
        class CreateUserRequest implements ICreateUserRequest {

            /**
             * Constructs a new CreateUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateUserRequest);

            /** CreateUserRequest banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserRequest cardChipId. */
            public cardChipId: string;

            /** CreateUserRequest accessCode. */
            public accessCode: string;

            /** CreateUserRequest cardTypeCode. */
            public cardTypeCode: number;

            /** CreateUserRequest cardRegionCode. */
            public cardRegionCode: number;

            /** CreateUserRequest device. */
            public device: wm5.protobuf.DeviceType;

            /** CreateUserRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserRequest instance
             */
            public static create(properties?: wm5.protobuf.ICreateUserRequest): wm5.protobuf.CreateUserRequest;

            /**
             * Encodes the specified CreateUserRequest message. Does not implicitly {@link wm5.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CreateUserRequest.verify|verify} messages.
             * @param message CreateUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateUserRequest;

            /**
             * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateUserRequest;

            /**
             * Verifies a CreateUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateUserRequest;

            /**
             * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
             * @param message CreateUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateUserResponse. */
        interface ICreateUserResponse {

            /** CreateUserResponse error */
            error: wm5.protobuf.ErrorCode;

            /** CreateUserResponse accessCode */
            accessCode?: (string|null);

            /** CreateUserResponse banapassportAmId */
            banapassportAmId?: (number|null);

            /** CreateUserResponse personId */
            personId?: (string|null);

            /** CreateUserResponse bnidLevel */
            bnidLevel?: (number|null);

            /** CreateUserResponse userId */
            userId: number;
        }

        /** Represents a CreateUserResponse. */
        class CreateUserResponse implements ICreateUserResponse {

            /**
             * Constructs a new CreateUserResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateUserResponse);

            /** CreateUserResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** CreateUserResponse accessCode. */
            public accessCode: string;

            /** CreateUserResponse banapassportAmId. */
            public banapassportAmId: number;

            /** CreateUserResponse personId. */
            public personId: string;

            /** CreateUserResponse bnidLevel. */
            public bnidLevel: number;

            /** CreateUserResponse userId. */
            public userId: number;

            /**
             * Creates a new CreateUserResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateUserResponse instance
             */
            public static create(properties?: wm5.protobuf.ICreateUserResponse): wm5.protobuf.CreateUserResponse;

            /**
             * Encodes the specified CreateUserResponse message. Does not implicitly {@link wm5.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CreateUserResponse.verify|verify} messages.
             * @param message CreateUserResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateUserResponse;

            /**
             * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateUserResponse;

            /**
             * Verifies a CreateUserResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateUserResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateUserResponse;

            /**
             * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
             * @param message CreateUserResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateUserResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateUserResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeRequest. */
        interface IAskAccessCodeRequest {

            /** AskAccessCodeRequest cardChipId */
            cardChipId: string;
        }

        /** Represents an AskAccessCodeRequest. */
        class AskAccessCodeRequest implements IAskAccessCodeRequest {

            /**
             * Constructs a new AskAccessCodeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IAskAccessCodeRequest);

            /** AskAccessCodeRequest cardChipId. */
            public cardChipId: string;

            /**
             * Creates a new AskAccessCodeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeRequest instance
             */
            public static create(properties?: wm5.protobuf.IAskAccessCodeRequest): wm5.protobuf.AskAccessCodeRequest;

            /**
             * Encodes the specified AskAccessCodeRequest message. Does not implicitly {@link wm5.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeRequest message, length delimited. Does not implicitly {@link wm5.protobuf.AskAccessCodeRequest.verify|verify} messages.
             * @param message AskAccessCodeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IAskAccessCodeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.AskAccessCodeRequest;

            /**
             * Decodes an AskAccessCodeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.AskAccessCodeRequest;

            /**
             * Verifies an AskAccessCodeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.AskAccessCodeRequest;

            /**
             * Creates a plain object from an AskAccessCodeRequest message. Also converts values to other types if specified.
             * @param message AskAccessCodeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.AskAccessCodeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AskAccessCodeResponse. */
        interface IAskAccessCodeResponse {

            /** AskAccessCodeResponse error */
            error: wm5.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode */
            accessCode: string;
        }

        /** Represents an AskAccessCodeResponse. */
        class AskAccessCodeResponse implements IAskAccessCodeResponse {

            /**
             * Constructs a new AskAccessCodeResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IAskAccessCodeResponse);

            /** AskAccessCodeResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** AskAccessCodeResponse accessCode. */
            public accessCode: string;

            /**
             * Creates a new AskAccessCodeResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AskAccessCodeResponse instance
             */
            public static create(properties?: wm5.protobuf.IAskAccessCodeResponse): wm5.protobuf.AskAccessCodeResponse;

            /**
             * Encodes the specified AskAccessCodeResponse message. Does not implicitly {@link wm5.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AskAccessCodeResponse message, length delimited. Does not implicitly {@link wm5.protobuf.AskAccessCodeResponse.verify|verify} messages.
             * @param message AskAccessCodeResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IAskAccessCodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.AskAccessCodeResponse;

            /**
             * Decodes an AskAccessCodeResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AskAccessCodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.AskAccessCodeResponse;

            /**
             * Verifies an AskAccessCodeResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AskAccessCodeResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AskAccessCodeResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.AskAccessCodeResponse;

            /**
             * Creates a plain object from an AskAccessCodeResponse message. Also converts values to other types if specified.
             * @param message AskAccessCodeResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.AskAccessCodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AskAccessCodeResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AskAccessCodeResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostRequest. */
        interface IRegisterOpponentGhostRequest {

            /** RegisterOpponentGhostRequest carId */
            carId: number;

            /** RegisterOpponentGhostRequest specialGhostId */
            specialGhostId: number;
        }

        /** Represents a RegisterOpponentGhostRequest. */
        class RegisterOpponentGhostRequest implements IRegisterOpponentGhostRequest {

            /**
             * Constructs a new RegisterOpponentGhostRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterOpponentGhostRequest);

            /** RegisterOpponentGhostRequest carId. */
            public carId: number;

            /** RegisterOpponentGhostRequest specialGhostId. */
            public specialGhostId: number;

            /**
             * Creates a new RegisterOpponentGhostRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostRequest instance
             */
            public static create(properties?: wm5.protobuf.IRegisterOpponentGhostRequest): wm5.protobuf.RegisterOpponentGhostRequest;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message. Does not implicitly {@link wm5.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterOpponentGhostRequest.verify|verify} messages.
             * @param message RegisterOpponentGhostRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterOpponentGhostRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterOpponentGhostRequest;

            /**
             * Decodes a RegisterOpponentGhostRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterOpponentGhostRequest;

            /**
             * Verifies a RegisterOpponentGhostRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterOpponentGhostRequest;

            /**
             * Creates a plain object from a RegisterOpponentGhostRequest message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterOpponentGhostRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RegisterOpponentGhostResponse. */
        interface IRegisterOpponentGhostResponse {

            /** RegisterOpponentGhostResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a RegisterOpponentGhostResponse. */
        class RegisterOpponentGhostResponse implements IRegisterOpponentGhostResponse {

            /**
             * Constructs a new RegisterOpponentGhostResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRegisterOpponentGhostResponse);

            /** RegisterOpponentGhostResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new RegisterOpponentGhostResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RegisterOpponentGhostResponse instance
             */
            public static create(properties?: wm5.protobuf.IRegisterOpponentGhostResponse): wm5.protobuf.RegisterOpponentGhostResponse;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message. Does not implicitly {@link wm5.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RegisterOpponentGhostResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RegisterOpponentGhostResponse.verify|verify} messages.
             * @param message RegisterOpponentGhostResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRegisterOpponentGhostResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RegisterOpponentGhostResponse;

            /**
             * Decodes a RegisterOpponentGhostResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RegisterOpponentGhostResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RegisterOpponentGhostResponse;

            /**
             * Verifies a RegisterOpponentGhostResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RegisterOpponentGhostResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RegisterOpponentGhostResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RegisterOpponentGhostResponse;

            /**
             * Creates a plain object from a RegisterOpponentGhostResponse message. Also converts values to other types if specified.
             * @param message RegisterOpponentGhostResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RegisterOpponentGhostResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RegisterOpponentGhostResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RegisterOpponentGhostResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckTeamNameRequest. */
        interface ICheckTeamNameRequest {

            /** CheckTeamNameRequest teamName */
            teamName: string;
        }

        /** Represents a CheckTeamNameRequest. */
        class CheckTeamNameRequest implements ICheckTeamNameRequest {

            /**
             * Constructs a new CheckTeamNameRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICheckTeamNameRequest);

            /** CheckTeamNameRequest teamName. */
            public teamName: string;

            /**
             * Creates a new CheckTeamNameRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckTeamNameRequest instance
             */
            public static create(properties?: wm5.protobuf.ICheckTeamNameRequest): wm5.protobuf.CheckTeamNameRequest;

            /**
             * Encodes the specified CheckTeamNameRequest message. Does not implicitly {@link wm5.protobuf.CheckTeamNameRequest.verify|verify} messages.
             * @param message CheckTeamNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICheckTeamNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckTeamNameRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CheckTeamNameRequest.verify|verify} messages.
             * @param message CheckTeamNameRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICheckTeamNameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckTeamNameRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckTeamNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CheckTeamNameRequest;

            /**
             * Decodes a CheckTeamNameRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckTeamNameRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CheckTeamNameRequest;

            /**
             * Verifies a CheckTeamNameRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckTeamNameRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckTeamNameRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CheckTeamNameRequest;

            /**
             * Creates a plain object from a CheckTeamNameRequest message. Also converts values to other types if specified.
             * @param message CheckTeamNameRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CheckTeamNameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckTeamNameRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckTeamNameRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckTeamNameResponse. */
        interface ICheckTeamNameResponse {

            /** CheckTeamNameResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a CheckTeamNameResponse. */
        class CheckTeamNameResponse implements ICheckTeamNameResponse {

            /**
             * Constructs a new CheckTeamNameResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICheckTeamNameResponse);

            /** CheckTeamNameResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new CheckTeamNameResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckTeamNameResponse instance
             */
            public static create(properties?: wm5.protobuf.ICheckTeamNameResponse): wm5.protobuf.CheckTeamNameResponse;

            /**
             * Encodes the specified CheckTeamNameResponse message. Does not implicitly {@link wm5.protobuf.CheckTeamNameResponse.verify|verify} messages.
             * @param message CheckTeamNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICheckTeamNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckTeamNameResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CheckTeamNameResponse.verify|verify} messages.
             * @param message CheckTeamNameResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICheckTeamNameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckTeamNameResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckTeamNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CheckTeamNameResponse;

            /**
             * Decodes a CheckTeamNameResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckTeamNameResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CheckTeamNameResponse;

            /**
             * Verifies a CheckTeamNameResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckTeamNameResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckTeamNameResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CheckTeamNameResponse;

            /**
             * Creates a plain object from a CheckTeamNameResponse message. Also converts values to other types if specified.
             * @param message CheckTeamNameResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CheckTeamNameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckTeamNameResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckTeamNameResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateTeamRequest. */
        interface ICreateTeamRequest {

            /** CreateTeamRequest userId */
            userId: number;

            /** CreateTeamRequest teamName */
            teamName: string;

            /** CreateTeamRequest timestamp */
            timestamp: number;
        }

        /** Represents a CreateTeamRequest. */
        class CreateTeamRequest implements ICreateTeamRequest {

            /**
             * Constructs a new CreateTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateTeamRequest);

            /** CreateTeamRequest userId. */
            public userId: number;

            /** CreateTeamRequest teamName. */
            public teamName: string;

            /** CreateTeamRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new CreateTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.ICreateTeamRequest): wm5.protobuf.CreateTeamRequest;

            /**
             * Encodes the specified CreateTeamRequest message. Does not implicitly {@link wm5.protobuf.CreateTeamRequest.verify|verify} messages.
             * @param message CreateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CreateTeamRequest.verify|verify} messages.
             * @param message CreateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateTeamRequest;

            /**
             * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateTeamRequest;

            /**
             * Verifies a CreateTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateTeamRequest;

            /**
             * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
             * @param message CreateTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateTeamResponse. */
        interface ICreateTeamResponse {

            /** CreateTeamResponse error */
            error: wm5.protobuf.ErrorCode;

            /** CreateTeamResponse team */
            team?: (wm5.protobuf.ITeam|null);

            /** CreateTeamResponse teamCarId */
            teamCarId?: (number|null);
        }

        /** Represents a CreateTeamResponse. */
        class CreateTeamResponse implements ICreateTeamResponse {

            /**
             * Constructs a new CreateTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateTeamResponse);

            /** CreateTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** CreateTeamResponse team. */
            public team?: (wm5.protobuf.ITeam|null);

            /** CreateTeamResponse teamCarId. */
            public teamCarId: number;

            /**
             * Creates a new CreateTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.ICreateTeamResponse): wm5.protobuf.CreateTeamResponse;

            /**
             * Encodes the specified CreateTeamResponse message. Does not implicitly {@link wm5.protobuf.CreateTeamResponse.verify|verify} messages.
             * @param message CreateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CreateTeamResponse.verify|verify} messages.
             * @param message CreateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateTeamResponse;

            /**
             * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateTeamResponse;

            /**
             * Verifies a CreateTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateTeamResponse;

            /**
             * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
             * @param message CreateTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchTeamRequest. */
        interface ISearchTeamRequest {

            /** SearchTeamRequest name */
            name?: (string|null);

            /** SearchTeamRequest placeId */
            placeId?: (string|null);
        }

        /** Represents a SearchTeamRequest. */
        class SearchTeamRequest implements ISearchTeamRequest {

            /**
             * Constructs a new SearchTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISearchTeamRequest);

            /** SearchTeamRequest name. */
            public name: string;

            /** SearchTeamRequest placeId. */
            public placeId: string;

            /**
             * Creates a new SearchTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.ISearchTeamRequest): wm5.protobuf.SearchTeamRequest;

            /**
             * Encodes the specified SearchTeamRequest message. Does not implicitly {@link wm5.protobuf.SearchTeamRequest.verify|verify} messages.
             * @param message SearchTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISearchTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SearchTeamRequest.verify|verify} messages.
             * @param message SearchTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISearchTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SearchTeamRequest;

            /**
             * Decodes a SearchTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SearchTeamRequest;

            /**
             * Verifies a SearchTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SearchTeamRequest;

            /**
             * Creates a plain object from a SearchTeamRequest message. Also converts values to other types if specified.
             * @param message SearchTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SearchTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchTeamResponse. */
        interface ISearchTeamResponse {

            /** SearchTeamResponse error */
            error: wm5.protobuf.ErrorCode;

            /** SearchTeamResponse teams */
            teams?: (wm5.protobuf.ITeam[]|null);

            /** SearchTeamResponse nameMatchedTeam */
            nameMatchedTeam?: (wm5.protobuf.ITeam|null);
        }

        /** Represents a SearchTeamResponse. */
        class SearchTeamResponse implements ISearchTeamResponse {

            /**
             * Constructs a new SearchTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISearchTeamResponse);

            /** SearchTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** SearchTeamResponse teams. */
            public teams: wm5.protobuf.ITeam[];

            /** SearchTeamResponse nameMatchedTeam. */
            public nameMatchedTeam?: (wm5.protobuf.ITeam|null);

            /**
             * Creates a new SearchTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.ISearchTeamResponse): wm5.protobuf.SearchTeamResponse;

            /**
             * Encodes the specified SearchTeamResponse message. Does not implicitly {@link wm5.protobuf.SearchTeamResponse.verify|verify} messages.
             * @param message SearchTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISearchTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SearchTeamResponse.verify|verify} messages.
             * @param message SearchTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISearchTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SearchTeamResponse;

            /**
             * Decodes a SearchTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SearchTeamResponse;

            /**
             * Verifies a SearchTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SearchTeamResponse;

            /**
             * Creates a plain object from a SearchTeamResponse message. Also converts values to other types if specified.
             * @param message SearchTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SearchTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinTeamRequest. */
        interface IJoinTeamRequest {

            /** JoinTeamRequest userId */
            userId: number;

            /** JoinTeamRequest teamId */
            teamId: number;
        }

        /** Represents a JoinTeamRequest. */
        class JoinTeamRequest implements IJoinTeamRequest {

            /**
             * Constructs a new JoinTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IJoinTeamRequest);

            /** JoinTeamRequest userId. */
            public userId: number;

            /** JoinTeamRequest teamId. */
            public teamId: number;

            /**
             * Creates a new JoinTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.IJoinTeamRequest): wm5.protobuf.JoinTeamRequest;

            /**
             * Encodes the specified JoinTeamRequest message. Does not implicitly {@link wm5.protobuf.JoinTeamRequest.verify|verify} messages.
             * @param message JoinTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.JoinTeamRequest.verify|verify} messages.
             * @param message JoinTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.JoinTeamRequest;

            /**
             * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.JoinTeamRequest;

            /**
             * Verifies a JoinTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.JoinTeamRequest;

            /**
             * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
             * @param message JoinTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.JoinTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JoinTeamResponse. */
        interface IJoinTeamResponse {

            /** JoinTeamResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a JoinTeamResponse. */
        class JoinTeamResponse implements IJoinTeamResponse {

            /**
             * Constructs a new JoinTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IJoinTeamResponse);

            /** JoinTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new JoinTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.IJoinTeamResponse): wm5.protobuf.JoinTeamResponse;

            /**
             * Encodes the specified JoinTeamResponse message. Does not implicitly {@link wm5.protobuf.JoinTeamResponse.verify|verify} messages.
             * @param message JoinTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.JoinTeamResponse.verify|verify} messages.
             * @param message JoinTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.JoinTeamResponse;

            /**
             * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.JoinTeamResponse;

            /**
             * Verifies a JoinTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.JoinTeamResponse;

            /**
             * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
             * @param message JoinTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.JoinTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JoinTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveTeamApplicantsRequest. */
        interface IApproveTeamApplicantsRequest {

            /** ApproveTeamApplicantsRequest userId */
            userId: number;

            /** ApproveTeamApplicantsRequest approvedUsers */
            approvedUsers?: (number[]|null);

            /** ApproveTeamApplicantsRequest rejectedUsers */
            rejectedUsers?: (number[]|null);
        }

        /** Represents an ApproveTeamApplicantsRequest. */
        class ApproveTeamApplicantsRequest implements IApproveTeamApplicantsRequest {

            /**
             * Constructs a new ApproveTeamApplicantsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IApproveTeamApplicantsRequest);

            /** ApproveTeamApplicantsRequest userId. */
            public userId: number;

            /** ApproveTeamApplicantsRequest approvedUsers. */
            public approvedUsers: number[];

            /** ApproveTeamApplicantsRequest rejectedUsers. */
            public rejectedUsers: number[];

            /**
             * Creates a new ApproveTeamApplicantsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveTeamApplicantsRequest instance
             */
            public static create(properties?: wm5.protobuf.IApproveTeamApplicantsRequest): wm5.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Encodes the specified ApproveTeamApplicantsRequest message. Does not implicitly {@link wm5.protobuf.ApproveTeamApplicantsRequest.verify|verify} messages.
             * @param message ApproveTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IApproveTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveTeamApplicantsRequest message, length delimited. Does not implicitly {@link wm5.protobuf.ApproveTeamApplicantsRequest.verify|verify} messages.
             * @param message ApproveTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IApproveTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveTeamApplicantsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Decodes an ApproveTeamApplicantsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Verifies an ApproveTeamApplicantsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveTeamApplicantsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveTeamApplicantsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ApproveTeamApplicantsRequest;

            /**
             * Creates a plain object from an ApproveTeamApplicantsRequest message. Also converts values to other types if specified.
             * @param message ApproveTeamApplicantsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ApproveTeamApplicantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveTeamApplicantsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveTeamApplicantsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApproveTeamApplicantsResponse. */
        interface IApproveTeamApplicantsResponse {

            /** ApproveTeamApplicantsResponse error */
            error: wm5.protobuf.ErrorCode;

            /** ApproveTeamApplicantsResponse numOfMembers */
            numOfMembers: number;

            /** ApproveTeamApplicantsResponse numOfMemberCars */
            numOfMemberCars: number;

            /** ApproveTeamApplicantsResponse numOfApplicants */
            numOfApplicants: number;
        }

        /** Represents an ApproveTeamApplicantsResponse. */
        class ApproveTeamApplicantsResponse implements IApproveTeamApplicantsResponse {

            /**
             * Constructs a new ApproveTeamApplicantsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IApproveTeamApplicantsResponse);

            /** ApproveTeamApplicantsResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** ApproveTeamApplicantsResponse numOfMembers. */
            public numOfMembers: number;

            /** ApproveTeamApplicantsResponse numOfMemberCars. */
            public numOfMemberCars: number;

            /** ApproveTeamApplicantsResponse numOfApplicants. */
            public numOfApplicants: number;

            /**
             * Creates a new ApproveTeamApplicantsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApproveTeamApplicantsResponse instance
             */
            public static create(properties?: wm5.protobuf.IApproveTeamApplicantsResponse): wm5.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Encodes the specified ApproveTeamApplicantsResponse message. Does not implicitly {@link wm5.protobuf.ApproveTeamApplicantsResponse.verify|verify} messages.
             * @param message ApproveTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IApproveTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApproveTeamApplicantsResponse message, length delimited. Does not implicitly {@link wm5.protobuf.ApproveTeamApplicantsResponse.verify|verify} messages.
             * @param message ApproveTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IApproveTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApproveTeamApplicantsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApproveTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Decodes an ApproveTeamApplicantsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApproveTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Verifies an ApproveTeamApplicantsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApproveTeamApplicantsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApproveTeamApplicantsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ApproveTeamApplicantsResponse;

            /**
             * Creates a plain object from an ApproveTeamApplicantsResponse message. Also converts values to other types if specified.
             * @param message ApproveTeamApplicantsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ApproveTeamApplicantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApproveTeamApplicantsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApproveTeamApplicantsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveTeamRequest. */
        interface ILeaveTeamRequest {

            /** LeaveTeamRequest userId */
            userId: number;
        }

        /** Represents a LeaveTeamRequest. */
        class LeaveTeamRequest implements ILeaveTeamRequest {

            /**
             * Constructs a new LeaveTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILeaveTeamRequest);

            /** LeaveTeamRequest userId. */
            public userId: number;

            /**
             * Creates a new LeaveTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.ILeaveTeamRequest): wm5.protobuf.LeaveTeamRequest;

            /**
             * Encodes the specified LeaveTeamRequest message. Does not implicitly {@link wm5.protobuf.LeaveTeamRequest.verify|verify} messages.
             * @param message LeaveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILeaveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LeaveTeamRequest.verify|verify} messages.
             * @param message LeaveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILeaveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LeaveTeamRequest;

            /**
             * Decodes a LeaveTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LeaveTeamRequest;

            /**
             * Verifies a LeaveTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LeaveTeamRequest;

            /**
             * Creates a plain object from a LeaveTeamRequest message. Also converts values to other types if specified.
             * @param message LeaveTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LeaveTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LeaveTeamResponse. */
        interface ILeaveTeamResponse {

            /** LeaveTeamResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a LeaveTeamResponse. */
        class LeaveTeamResponse implements ILeaveTeamResponse {

            /**
             * Constructs a new LeaveTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILeaveTeamResponse);

            /** LeaveTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new LeaveTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LeaveTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.ILeaveTeamResponse): wm5.protobuf.LeaveTeamResponse;

            /**
             * Encodes the specified LeaveTeamResponse message. Does not implicitly {@link wm5.protobuf.LeaveTeamResponse.verify|verify} messages.
             * @param message LeaveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILeaveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LeaveTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LeaveTeamResponse.verify|verify} messages.
             * @param message LeaveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILeaveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LeaveTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LeaveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LeaveTeamResponse;

            /**
             * Decodes a LeaveTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LeaveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LeaveTeamResponse;

            /**
             * Verifies a LeaveTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LeaveTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LeaveTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LeaveTeamResponse;

            /**
             * Creates a plain object from a LeaveTeamResponse message. Also converts values to other types if specified.
             * @param message LeaveTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LeaveTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LeaveTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LeaveTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DissolveTeamRequest. */
        interface IDissolveTeamRequest {

            /** DissolveTeamRequest userId */
            userId: number;
        }

        /** Represents a DissolveTeamRequest. */
        class DissolveTeamRequest implements IDissolveTeamRequest {

            /**
             * Constructs a new DissolveTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IDissolveTeamRequest);

            /** DissolveTeamRequest userId. */
            public userId: number;

            /**
             * Creates a new DissolveTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DissolveTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.IDissolveTeamRequest): wm5.protobuf.DissolveTeamRequest;

            /**
             * Encodes the specified DissolveTeamRequest message. Does not implicitly {@link wm5.protobuf.DissolveTeamRequest.verify|verify} messages.
             * @param message DissolveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IDissolveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DissolveTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.DissolveTeamRequest.verify|verify} messages.
             * @param message DissolveTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IDissolveTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DissolveTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DissolveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.DissolveTeamRequest;

            /**
             * Decodes a DissolveTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DissolveTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.DissolveTeamRequest;

            /**
             * Verifies a DissolveTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DissolveTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DissolveTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.DissolveTeamRequest;

            /**
             * Creates a plain object from a DissolveTeamRequest message. Also converts values to other types if specified.
             * @param message DissolveTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.DissolveTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DissolveTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DissolveTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DissolveTeamResponse. */
        interface IDissolveTeamResponse {

            /** DissolveTeamResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a DissolveTeamResponse. */
        class DissolveTeamResponse implements IDissolveTeamResponse {

            /**
             * Constructs a new DissolveTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IDissolveTeamResponse);

            /** DissolveTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new DissolveTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DissolveTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.IDissolveTeamResponse): wm5.protobuf.DissolveTeamResponse;

            /**
             * Encodes the specified DissolveTeamResponse message. Does not implicitly {@link wm5.protobuf.DissolveTeamResponse.verify|verify} messages.
             * @param message DissolveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IDissolveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DissolveTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.DissolveTeamResponse.verify|verify} messages.
             * @param message DissolveTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IDissolveTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DissolveTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DissolveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.DissolveTeamResponse;

            /**
             * Decodes a DissolveTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DissolveTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.DissolveTeamResponse;

            /**
             * Verifies a DissolveTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DissolveTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DissolveTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.DissolveTeamResponse;

            /**
             * Creates a plain object from a DissolveTeamResponse message. Also converts values to other types if specified.
             * @param message DissolveTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.DissolveTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DissolveTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DissolveTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamMembersRequest. */
        interface ILoadTeamMembersRequest {

            /** LoadTeamMembersRequest teamId */
            teamId: number;
        }

        /** Represents a LoadTeamMembersRequest. */
        class LoadTeamMembersRequest implements ILoadTeamMembersRequest {

            /**
             * Constructs a new LoadTeamMembersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTeamMembersRequest);

            /** LoadTeamMembersRequest teamId. */
            public teamId: number;

            /**
             * Creates a new LoadTeamMembersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamMembersRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadTeamMembersRequest): wm5.protobuf.LoadTeamMembersRequest;

            /**
             * Encodes the specified LoadTeamMembersRequest message. Does not implicitly {@link wm5.protobuf.LoadTeamMembersRequest.verify|verify} messages.
             * @param message LoadTeamMembersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTeamMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamMembersRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTeamMembersRequest.verify|verify} messages.
             * @param message LoadTeamMembersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTeamMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamMembersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamMembersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTeamMembersRequest;

            /**
             * Decodes a LoadTeamMembersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamMembersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTeamMembersRequest;

            /**
             * Verifies a LoadTeamMembersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamMembersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamMembersRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTeamMembersRequest;

            /**
             * Creates a plain object from a LoadTeamMembersRequest message. Also converts values to other types if specified.
             * @param message LoadTeamMembersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTeamMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamMembersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamMembersRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamMembersResponse. */
        interface ILoadTeamMembersResponse {

            /** LoadTeamMembersResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadTeamMembersResponse team */
            team?: (wm5.protobuf.ITeam|null);

            /** LoadTeamMembersResponse members */
            members?: (wm5.protobuf.ITeamMember[]|null);
        }

        /** Represents a LoadTeamMembersResponse. */
        class LoadTeamMembersResponse implements ILoadTeamMembersResponse {

            /**
             * Constructs a new LoadTeamMembersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTeamMembersResponse);

            /** LoadTeamMembersResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadTeamMembersResponse team. */
            public team?: (wm5.protobuf.ITeam|null);

            /** LoadTeamMembersResponse members. */
            public members: wm5.protobuf.ITeamMember[];

            /**
             * Creates a new LoadTeamMembersResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamMembersResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadTeamMembersResponse): wm5.protobuf.LoadTeamMembersResponse;

            /**
             * Encodes the specified LoadTeamMembersResponse message. Does not implicitly {@link wm5.protobuf.LoadTeamMembersResponse.verify|verify} messages.
             * @param message LoadTeamMembersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTeamMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamMembersResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTeamMembersResponse.verify|verify} messages.
             * @param message LoadTeamMembersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTeamMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamMembersResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamMembersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTeamMembersResponse;

            /**
             * Decodes a LoadTeamMembersResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamMembersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTeamMembersResponse;

            /**
             * Verifies a LoadTeamMembersResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamMembersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamMembersResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTeamMembersResponse;

            /**
             * Creates a plain object from a LoadTeamMembersResponse message. Also converts values to other types if specified.
             * @param message LoadTeamMembersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTeamMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamMembersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamMembersResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamApplicantsRequest. */
        interface ILoadTeamApplicantsRequest {

            /** LoadTeamApplicantsRequest teamId */
            teamId: number;
        }

        /** Represents a LoadTeamApplicantsRequest. */
        class LoadTeamApplicantsRequest implements ILoadTeamApplicantsRequest {

            /**
             * Constructs a new LoadTeamApplicantsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTeamApplicantsRequest);

            /** LoadTeamApplicantsRequest teamId. */
            public teamId: number;

            /**
             * Creates a new LoadTeamApplicantsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamApplicantsRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadTeamApplicantsRequest): wm5.protobuf.LoadTeamApplicantsRequest;

            /**
             * Encodes the specified LoadTeamApplicantsRequest message. Does not implicitly {@link wm5.protobuf.LoadTeamApplicantsRequest.verify|verify} messages.
             * @param message LoadTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamApplicantsRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTeamApplicantsRequest.verify|verify} messages.
             * @param message LoadTeamApplicantsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTeamApplicantsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamApplicantsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTeamApplicantsRequest;

            /**
             * Decodes a LoadTeamApplicantsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamApplicantsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTeamApplicantsRequest;

            /**
             * Verifies a LoadTeamApplicantsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamApplicantsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamApplicantsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTeamApplicantsRequest;

            /**
             * Creates a plain object from a LoadTeamApplicantsRequest message. Also converts values to other types if specified.
             * @param message LoadTeamApplicantsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTeamApplicantsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamApplicantsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamApplicantsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadTeamApplicantsResponse. */
        interface ILoadTeamApplicantsResponse {

            /** LoadTeamApplicantsResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadTeamApplicantsResponse applicants */
            applicants?: (wm5.protobuf.ITeamApplicant[]|null);
        }

        /** Represents a LoadTeamApplicantsResponse. */
        class LoadTeamApplicantsResponse implements ILoadTeamApplicantsResponse {

            /**
             * Constructs a new LoadTeamApplicantsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadTeamApplicantsResponse);

            /** LoadTeamApplicantsResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadTeamApplicantsResponse applicants. */
            public applicants: wm5.protobuf.ITeamApplicant[];

            /**
             * Creates a new LoadTeamApplicantsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadTeamApplicantsResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadTeamApplicantsResponse): wm5.protobuf.LoadTeamApplicantsResponse;

            /**
             * Encodes the specified LoadTeamApplicantsResponse message. Does not implicitly {@link wm5.protobuf.LoadTeamApplicantsResponse.verify|verify} messages.
             * @param message LoadTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadTeamApplicantsResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadTeamApplicantsResponse.verify|verify} messages.
             * @param message LoadTeamApplicantsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadTeamApplicantsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadTeamApplicantsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadTeamApplicantsResponse;

            /**
             * Decodes a LoadTeamApplicantsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadTeamApplicantsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadTeamApplicantsResponse;

            /**
             * Verifies a LoadTeamApplicantsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadTeamApplicantsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadTeamApplicantsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadTeamApplicantsResponse;

            /**
             * Creates a plain object from a LoadTeamApplicantsResponse message. Also converts values to other types if specified.
             * @param message LoadTeamApplicantsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadTeamApplicantsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadTeamApplicantsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadTeamApplicantsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateTeamRequest. */
        interface IUpdateTeamRequest {

            /** UpdateTeamRequest userId */
            userId: number;

            /** UpdateTeamRequest teamStickerFont */
            teamStickerFont?: (number|null);

            /** UpdateTeamRequest closed */
            closed?: (boolean|null);

            /** UpdateTeamRequest timestamp */
            timestamp: number;
        }

        /** Represents an UpdateTeamRequest. */
        class UpdateTeamRequest implements IUpdateTeamRequest {

            /**
             * Constructs a new UpdateTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateTeamRequest);

            /** UpdateTeamRequest userId. */
            public userId: number;

            /** UpdateTeamRequest teamStickerFont. */
            public teamStickerFont: number;

            /** UpdateTeamRequest closed. */
            public closed: boolean;

            /** UpdateTeamRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new UpdateTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.IUpdateTeamRequest): wm5.protobuf.UpdateTeamRequest;

            /**
             * Encodes the specified UpdateTeamRequest message. Does not implicitly {@link wm5.protobuf.UpdateTeamRequest.verify|verify} messages.
             * @param message UpdateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateTeamRequest.verify|verify} messages.
             * @param message UpdateTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateTeamRequest;

            /**
             * Decodes an UpdateTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateTeamRequest;

            /**
             * Verifies an UpdateTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateTeamRequest;

            /**
             * Creates a plain object from an UpdateTeamRequest message. Also converts values to other types if specified.
             * @param message UpdateTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateTeamResponse. */
        interface IUpdateTeamResponse {

            /** UpdateTeamResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents an UpdateTeamResponse. */
        class UpdateTeamResponse implements IUpdateTeamResponse {

            /**
             * Constructs a new UpdateTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateTeamResponse);

            /** UpdateTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new UpdateTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.IUpdateTeamResponse): wm5.protobuf.UpdateTeamResponse;

            /**
             * Encodes the specified UpdateTeamResponse message. Does not implicitly {@link wm5.protobuf.UpdateTeamResponse.verify|verify} messages.
             * @param message UpdateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateTeamResponse.verify|verify} messages.
             * @param message UpdateTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateTeamResponse;

            /**
             * Decodes an UpdateTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateTeamResponse;

            /**
             * Verifies an UpdateTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateTeamResponse;

            /**
             * Creates a plain object from an UpdateTeamResponse message. Also converts values to other types if specified.
             * @param message UpdateTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightRequest. */
        interface IGrantCarRightRequest {

            /** GrantCarRightRequest userId */
            userId: number;

            /** GrantCarRightRequest targetUserId */
            targetUserId: number;

            /** GrantCarRightRequest timestamp */
            timestamp: number;
        }

        /** Represents a GrantCarRightRequest. */
        class GrantCarRightRequest implements IGrantCarRightRequest {

            /**
             * Constructs a new GrantCarRightRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGrantCarRightRequest);

            /** GrantCarRightRequest userId. */
            public userId: number;

            /** GrantCarRightRequest targetUserId. */
            public targetUserId: number;

            /** GrantCarRightRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new GrantCarRightRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightRequest instance
             */
            public static create(properties?: wm5.protobuf.IGrantCarRightRequest): wm5.protobuf.GrantCarRightRequest;

            /**
             * Encodes the specified GrantCarRightRequest message. Does not implicitly {@link wm5.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightRequest message, length delimited. Does not implicitly {@link wm5.protobuf.GrantCarRightRequest.verify|verify} messages.
             * @param message GrantCarRightRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGrantCarRightRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GrantCarRightRequest;

            /**
             * Decodes a GrantCarRightRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GrantCarRightRequest;

            /**
             * Verifies a GrantCarRightRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GrantCarRightRequest;

            /**
             * Creates a plain object from a GrantCarRightRequest message. Also converts values to other types if specified.
             * @param message GrantCarRightRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GrantCarRightRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GrantCarRightResponse. */
        interface IGrantCarRightResponse {

            /** GrantCarRightResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a GrantCarRightResponse. */
        class GrantCarRightResponse implements IGrantCarRightResponse {

            /**
             * Constructs a new GrantCarRightResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGrantCarRightResponse);

            /** GrantCarRightResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new GrantCarRightResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GrantCarRightResponse instance
             */
            public static create(properties?: wm5.protobuf.IGrantCarRightResponse): wm5.protobuf.GrantCarRightResponse;

            /**
             * Encodes the specified GrantCarRightResponse message. Does not implicitly {@link wm5.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GrantCarRightResponse message, length delimited. Does not implicitly {@link wm5.protobuf.GrantCarRightResponse.verify|verify} messages.
             * @param message GrantCarRightResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGrantCarRightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GrantCarRightResponse;

            /**
             * Decodes a GrantCarRightResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GrantCarRightResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GrantCarRightResponse;

            /**
             * Verifies a GrantCarRightResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GrantCarRightResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GrantCarRightResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GrantCarRightResponse;

            /**
             * Creates a plain object from a GrantCarRightResponse message. Also converts values to other types if specified.
             * @param message GrantCarRightResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GrantCarRightResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GrantCarRightResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GrantCarRightResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarCampaignInfoRequest. */
        interface ILoadCarCampaignInfoRequest {

            /** LoadCarCampaignInfoRequest userId */
            userId: number;
        }

        /** Represents a LoadCarCampaignInfoRequest. */
        class LoadCarCampaignInfoRequest implements ILoadCarCampaignInfoRequest {

            /**
             * Constructs a new LoadCarCampaignInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadCarCampaignInfoRequest);

            /** LoadCarCampaignInfoRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadCarCampaignInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarCampaignInfoRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadCarCampaignInfoRequest): wm5.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Encodes the specified LoadCarCampaignInfoRequest message. Does not implicitly {@link wm5.protobuf.LoadCarCampaignInfoRequest.verify|verify} messages.
             * @param message LoadCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarCampaignInfoRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadCarCampaignInfoRequest.verify|verify} messages.
             * @param message LoadCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarCampaignInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Decodes a LoadCarCampaignInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Verifies a LoadCarCampaignInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarCampaignInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarCampaignInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadCarCampaignInfoRequest;

            /**
             * Creates a plain object from a LoadCarCampaignInfoRequest message. Also converts values to other types if specified.
             * @param message LoadCarCampaignInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadCarCampaignInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarCampaignInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarCampaignInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadCarCampaignInfoResponse. */
        interface ILoadCarCampaignInfoResponse {

            /** LoadCarCampaignInfoResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadCarCampaignInfoResponse carCampaignUserState */
            carCampaignUserState: wm5.protobuf.CarCampaignUserState;

            /** LoadCarCampaignInfoResponse numOfPieces */
            numOfPieces: number;

            /** LoadCarCampaignInfoResponse numOfRemainingLotteries */
            numOfRemainingLotteries: number;

            /** LoadCarCampaignInfoResponse lotteryOpenBits */
            lotteryOpenBits: number;
        }

        /** Represents a LoadCarCampaignInfoResponse. */
        class LoadCarCampaignInfoResponse implements ILoadCarCampaignInfoResponse {

            /**
             * Constructs a new LoadCarCampaignInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadCarCampaignInfoResponse);

            /** LoadCarCampaignInfoResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadCarCampaignInfoResponse carCampaignUserState. */
            public carCampaignUserState: wm5.protobuf.CarCampaignUserState;

            /** LoadCarCampaignInfoResponse numOfPieces. */
            public numOfPieces: number;

            /** LoadCarCampaignInfoResponse numOfRemainingLotteries. */
            public numOfRemainingLotteries: number;

            /** LoadCarCampaignInfoResponse lotteryOpenBits. */
            public lotteryOpenBits: number;

            /**
             * Creates a new LoadCarCampaignInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadCarCampaignInfoResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadCarCampaignInfoResponse): wm5.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Encodes the specified LoadCarCampaignInfoResponse message. Does not implicitly {@link wm5.protobuf.LoadCarCampaignInfoResponse.verify|verify} messages.
             * @param message LoadCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadCarCampaignInfoResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadCarCampaignInfoResponse.verify|verify} messages.
             * @param message LoadCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadCarCampaignInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Decodes a LoadCarCampaignInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Verifies a LoadCarCampaignInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadCarCampaignInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadCarCampaignInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadCarCampaignInfoResponse;

            /**
             * Creates a plain object from a LoadCarCampaignInfoResponse message. Also converts values to other types if specified.
             * @param message LoadCarCampaignInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadCarCampaignInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadCarCampaignInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadCarCampaignInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveCarCampaignInfoRequest. */
        interface ISaveCarCampaignInfoRequest {

            /** SaveCarCampaignInfoRequest userId */
            userId: number;

            /** SaveCarCampaignInfoRequest lotteryOpenBits */
            lotteryOpenBits: number;

            /** SaveCarCampaignInfoRequest timestamp */
            timestamp: number;
        }

        /** Represents a SaveCarCampaignInfoRequest. */
        class SaveCarCampaignInfoRequest implements ISaveCarCampaignInfoRequest {

            /**
             * Constructs a new SaveCarCampaignInfoRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveCarCampaignInfoRequest);

            /** SaveCarCampaignInfoRequest userId. */
            public userId: number;

            /** SaveCarCampaignInfoRequest lotteryOpenBits. */
            public lotteryOpenBits: number;

            /** SaveCarCampaignInfoRequest timestamp. */
            public timestamp: number;

            /**
             * Creates a new SaveCarCampaignInfoRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveCarCampaignInfoRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveCarCampaignInfoRequest): wm5.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Encodes the specified SaveCarCampaignInfoRequest message. Does not implicitly {@link wm5.protobuf.SaveCarCampaignInfoRequest.verify|verify} messages.
             * @param message SaveCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveCarCampaignInfoRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveCarCampaignInfoRequest.verify|verify} messages.
             * @param message SaveCarCampaignInfoRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveCarCampaignInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveCarCampaignInfoRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Decodes a SaveCarCampaignInfoRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveCarCampaignInfoRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Verifies a SaveCarCampaignInfoRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveCarCampaignInfoRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveCarCampaignInfoRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveCarCampaignInfoRequest;

            /**
             * Creates a plain object from a SaveCarCampaignInfoRequest message. Also converts values to other types if specified.
             * @param message SaveCarCampaignInfoRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveCarCampaignInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveCarCampaignInfoRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveCarCampaignInfoRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveCarCampaignInfoResponse. */
        interface ISaveCarCampaignInfoResponse {

            /** SaveCarCampaignInfoResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveCarCampaignInfoResponse. */
        class SaveCarCampaignInfoResponse implements ISaveCarCampaignInfoResponse {

            /**
             * Constructs a new SaveCarCampaignInfoResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveCarCampaignInfoResponse);

            /** SaveCarCampaignInfoResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveCarCampaignInfoResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveCarCampaignInfoResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveCarCampaignInfoResponse): wm5.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Encodes the specified SaveCarCampaignInfoResponse message. Does not implicitly {@link wm5.protobuf.SaveCarCampaignInfoResponse.verify|verify} messages.
             * @param message SaveCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveCarCampaignInfoResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveCarCampaignInfoResponse.verify|verify} messages.
             * @param message SaveCarCampaignInfoResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveCarCampaignInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveCarCampaignInfoResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Decodes a SaveCarCampaignInfoResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveCarCampaignInfoResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Verifies a SaveCarCampaignInfoResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveCarCampaignInfoResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveCarCampaignInfoResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveCarCampaignInfoResponse;

            /**
             * Creates a plain object from a SaveCarCampaignInfoResponse message. Also converts values to other types if specified.
             * @param message SaveCarCampaignInfoResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveCarCampaignInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveCarCampaignInfoResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveCarCampaignInfoResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AcceptCarCampaignRequest. */
        interface IAcceptCarCampaignRequest {

            /** AcceptCarCampaignRequest userId */
            userId: number;
        }

        /** Represents an AcceptCarCampaignRequest. */
        class AcceptCarCampaignRequest implements IAcceptCarCampaignRequest {

            /**
             * Constructs a new AcceptCarCampaignRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IAcceptCarCampaignRequest);

            /** AcceptCarCampaignRequest userId. */
            public userId: number;

            /**
             * Creates a new AcceptCarCampaignRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AcceptCarCampaignRequest instance
             */
            public static create(properties?: wm5.protobuf.IAcceptCarCampaignRequest): wm5.protobuf.AcceptCarCampaignRequest;

            /**
             * Encodes the specified AcceptCarCampaignRequest message. Does not implicitly {@link wm5.protobuf.AcceptCarCampaignRequest.verify|verify} messages.
             * @param message AcceptCarCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IAcceptCarCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AcceptCarCampaignRequest message, length delimited. Does not implicitly {@link wm5.protobuf.AcceptCarCampaignRequest.verify|verify} messages.
             * @param message AcceptCarCampaignRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IAcceptCarCampaignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AcceptCarCampaignRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AcceptCarCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.AcceptCarCampaignRequest;

            /**
             * Decodes an AcceptCarCampaignRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AcceptCarCampaignRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.AcceptCarCampaignRequest;

            /**
             * Verifies an AcceptCarCampaignRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AcceptCarCampaignRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AcceptCarCampaignRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.AcceptCarCampaignRequest;

            /**
             * Creates a plain object from an AcceptCarCampaignRequest message. Also converts values to other types if specified.
             * @param message AcceptCarCampaignRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.AcceptCarCampaignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AcceptCarCampaignRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AcceptCarCampaignRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AcceptCarCampaignResponse. */
        interface IAcceptCarCampaignResponse {

            /** AcceptCarCampaignResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents an AcceptCarCampaignResponse. */
        class AcceptCarCampaignResponse implements IAcceptCarCampaignResponse {

            /**
             * Constructs a new AcceptCarCampaignResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IAcceptCarCampaignResponse);

            /** AcceptCarCampaignResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new AcceptCarCampaignResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AcceptCarCampaignResponse instance
             */
            public static create(properties?: wm5.protobuf.IAcceptCarCampaignResponse): wm5.protobuf.AcceptCarCampaignResponse;

            /**
             * Encodes the specified AcceptCarCampaignResponse message. Does not implicitly {@link wm5.protobuf.AcceptCarCampaignResponse.verify|verify} messages.
             * @param message AcceptCarCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IAcceptCarCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AcceptCarCampaignResponse message, length delimited. Does not implicitly {@link wm5.protobuf.AcceptCarCampaignResponse.verify|verify} messages.
             * @param message AcceptCarCampaignResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IAcceptCarCampaignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AcceptCarCampaignResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AcceptCarCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.AcceptCarCampaignResponse;

            /**
             * Decodes an AcceptCarCampaignResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AcceptCarCampaignResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.AcceptCarCampaignResponse;

            /**
             * Verifies an AcceptCarCampaignResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AcceptCarCampaignResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AcceptCarCampaignResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.AcceptCarCampaignResponse;

            /**
             * Creates a plain object from an AcceptCarCampaignResponse message. Also converts values to other types if specified.
             * @param message AcceptCarCampaignResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.AcceptCarCampaignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AcceptCarCampaignResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AcceptCarCampaignResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingRequest. */
        interface ILoadGhostCompetitionRankingRequest {

            /** LoadGhostCompetitionRankingRequest carId */
            carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId */
            competitionId: number;
        }

        /** Represents a LoadGhostCompetitionRankingRequest. */
        class LoadGhostCompetitionRankingRequest implements ILoadGhostCompetitionRankingRequest {

            /**
             * Constructs a new LoadGhostCompetitionRankingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostCompetitionRankingRequest);

            /** LoadGhostCompetitionRankingRequest carId. */
            public carId: number;

            /** LoadGhostCompetitionRankingRequest competitionId. */
            public competitionId: number;

            /**
             * Creates a new LoadGhostCompetitionRankingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostCompetitionRankingRequest): wm5.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingRequest.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostCompetitionRankingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Decodes a LoadGhostCompetitionRankingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Verifies a LoadGhostCompetitionRankingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostCompetitionRankingRequest;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingRequest message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostCompetitionRankingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadGhostCompetitionRankingResponse. */
        interface ILoadGhostCompetitionRankingResponse {

            /** LoadGhostCompetitionRankingResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId */
            periodId?: (number|null);

            /** LoadGhostCompetitionRankingResponse numOfParticipants */
            numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule */
            competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord */
            ownRecord?: (wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords */
            topRecords?: (wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry[]|null);
        }

        /** Represents a LoadGhostCompetitionRankingResponse. */
        class LoadGhostCompetitionRankingResponse implements ILoadGhostCompetitionRankingResponse {

            /**
             * Constructs a new LoadGhostCompetitionRankingResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadGhostCompetitionRankingResponse);

            /** LoadGhostCompetitionRankingResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadGhostCompetitionRankingResponse periodId. */
            public periodId: number;

            /** LoadGhostCompetitionRankingResponse numOfParticipants. */
            public numOfParticipants: number;

            /** LoadGhostCompetitionRankingResponse competitionSchedule. */
            public competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);

            /** LoadGhostCompetitionRankingResponse ownRecord. */
            public ownRecord?: (wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry|null);

            /** LoadGhostCompetitionRankingResponse topRecords. */
            public topRecords: wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry[];

            /**
             * Creates a new LoadGhostCompetitionRankingResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadGhostCompetitionRankingResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadGhostCompetitionRankingResponse): wm5.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadGhostCompetitionRankingResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingResponse.verify|verify} messages.
             * @param message LoadGhostCompetitionRankingResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadGhostCompetitionRankingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Decodes a LoadGhostCompetitionRankingResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadGhostCompetitionRankingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Verifies a LoadGhostCompetitionRankingResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadGhostCompetitionRankingResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadGhostCompetitionRankingResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostCompetitionRankingResponse;

            /**
             * Creates a plain object from a LoadGhostCompetitionRankingResponse message. Also converts values to other types if specified.
             * @param message LoadGhostCompetitionRankingResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadGhostCompetitionRankingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadGhostCompetitionRankingResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadGhostCompetitionRankingResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadGhostCompetitionRankingResponse {

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry rank */
                rank: number;

                /** Entry result */
                result: number;

                /** Entry carId */
                carId: number;

                /** Entry name */
                name: string;

                /** Entry regionId */
                regionId: number;

                /** Entry model */
                model: number;

                /** Entry visualModel */
                visualModel: number;

                /** Entry defaultColor */
                defaultColor: number;

                /** Entry title */
                title: string;

                /** Entry level */
                level: number;

                /** Entry teamName */
                teamName?: (string|null);

                /** Entry playedShopName */
                playedShopName: string;

                /** Entry playedAt */
                playedAt: number;
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry);

                /** Entry rank. */
                public rank: number;

                /** Entry result. */
                public result: number;

                /** Entry carId. */
                public carId: number;

                /** Entry name. */
                public name: string;

                /** Entry regionId. */
                public regionId: number;

                /** Entry model. */
                public model: number;

                /** Entry visualModel. */
                public visualModel: number;

                /** Entry defaultColor. */
                public defaultColor: number;

                /** Entry title. */
                public title: string;

                /** Entry level. */
                public level: number;

                /** Entry teamName. */
                public teamName: string;

                /** Entry playedShopName. */
                public playedShopName: string;

                /** Entry playedAt. */
                public playedAt: number;

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry): wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadGhostCompetitionRankingResponse.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadGhostCompetitionRankingResponse.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Entry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveFaceRecognitionResultRequest. */
        interface ISaveFaceRecognitionResultRequest {

            /** SaveFaceRecognitionResultRequest userId */
            userId: number;

            /** SaveFaceRecognitionResultRequest timestamp */
            timestamp: number;

            /** SaveFaceRecognitionResultRequest placeId */
            placeId: string;

            /** SaveFaceRecognitionResultRequest pcbSerial */
            pcbSerial: string;

            /** SaveFaceRecognitionResultRequest age */
            age: number;

            /** SaveFaceRecognitionResultRequest ageConfidence */
            ageConfidence: number;

            /** SaveFaceRecognitionResultRequest ageIntegrations */
            ageIntegrations: number;

            /** SaveFaceRecognitionResultRequest gender */
            gender: number;

            /** SaveFaceRecognitionResultRequest genderConfidence */
            genderConfidence: number;

            /** SaveFaceRecognitionResultRequest genderIntegrations */
            genderIntegrations: number;
        }

        /** Represents a SaveFaceRecognitionResultRequest. */
        class SaveFaceRecognitionResultRequest implements ISaveFaceRecognitionResultRequest {

            /**
             * Constructs a new SaveFaceRecognitionResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveFaceRecognitionResultRequest);

            /** SaveFaceRecognitionResultRequest userId. */
            public userId: number;

            /** SaveFaceRecognitionResultRequest timestamp. */
            public timestamp: number;

            /** SaveFaceRecognitionResultRequest placeId. */
            public placeId: string;

            /** SaveFaceRecognitionResultRequest pcbSerial. */
            public pcbSerial: string;

            /** SaveFaceRecognitionResultRequest age. */
            public age: number;

            /** SaveFaceRecognitionResultRequest ageConfidence. */
            public ageConfidence: number;

            /** SaveFaceRecognitionResultRequest ageIntegrations. */
            public ageIntegrations: number;

            /** SaveFaceRecognitionResultRequest gender. */
            public gender: number;

            /** SaveFaceRecognitionResultRequest genderConfidence. */
            public genderConfidence: number;

            /** SaveFaceRecognitionResultRequest genderIntegrations. */
            public genderIntegrations: number;

            /**
             * Creates a new SaveFaceRecognitionResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFaceRecognitionResultRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveFaceRecognitionResultRequest): wm5.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Encodes the specified SaveFaceRecognitionResultRequest message. Does not implicitly {@link wm5.protobuf.SaveFaceRecognitionResultRequest.verify|verify} messages.
             * @param message SaveFaceRecognitionResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveFaceRecognitionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFaceRecognitionResultRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveFaceRecognitionResultRequest.verify|verify} messages.
             * @param message SaveFaceRecognitionResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveFaceRecognitionResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFaceRecognitionResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFaceRecognitionResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Decodes a SaveFaceRecognitionResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFaceRecognitionResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Verifies a SaveFaceRecognitionResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFaceRecognitionResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFaceRecognitionResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveFaceRecognitionResultRequest;

            /**
             * Creates a plain object from a SaveFaceRecognitionResultRequest message. Also converts values to other types if specified.
             * @param message SaveFaceRecognitionResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveFaceRecognitionResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFaceRecognitionResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveFaceRecognitionResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveFaceRecognitionResultResponse. */
        interface ISaveFaceRecognitionResultResponse {

            /** SaveFaceRecognitionResultResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveFaceRecognitionResultResponse. */
        class SaveFaceRecognitionResultResponse implements ISaveFaceRecognitionResultResponse {

            /**
             * Constructs a new SaveFaceRecognitionResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveFaceRecognitionResultResponse);

            /** SaveFaceRecognitionResultResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveFaceRecognitionResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveFaceRecognitionResultResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveFaceRecognitionResultResponse): wm5.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Encodes the specified SaveFaceRecognitionResultResponse message. Does not implicitly {@link wm5.protobuf.SaveFaceRecognitionResultResponse.verify|verify} messages.
             * @param message SaveFaceRecognitionResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveFaceRecognitionResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveFaceRecognitionResultResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveFaceRecognitionResultResponse.verify|verify} messages.
             * @param message SaveFaceRecognitionResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveFaceRecognitionResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveFaceRecognitionResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveFaceRecognitionResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Decodes a SaveFaceRecognitionResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveFaceRecognitionResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Verifies a SaveFaceRecognitionResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveFaceRecognitionResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveFaceRecognitionResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveFaceRecognitionResultResponse;

            /**
             * Creates a plain object from a SaveFaceRecognitionResultResponse message. Also converts values to other types if specified.
             * @param message SaveFaceRecognitionResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveFaceRecognitionResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveFaceRecognitionResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveFaceRecognitionResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadShopInformationRequest. */
        interface ILoadShopInformationRequest {

            /** LoadShopInformationRequest userId */
            userId: number;

            /** LoadShopInformationRequest carId */
            carId: number;

            /** LoadShopInformationRequest model */
            model: number;

            /** LoadShopInformationRequest placeId */
            placeId: string;
        }

        /** Represents a LoadShopInformationRequest. */
        class LoadShopInformationRequest implements ILoadShopInformationRequest {

            /**
             * Constructs a new LoadShopInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadShopInformationRequest);

            /** LoadShopInformationRequest userId. */
            public userId: number;

            /** LoadShopInformationRequest carId. */
            public carId: number;

            /** LoadShopInformationRequest model. */
            public model: number;

            /** LoadShopInformationRequest placeId. */
            public placeId: string;

            /**
             * Creates a new LoadShopInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadShopInformationRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadShopInformationRequest): wm5.protobuf.LoadShopInformationRequest;

            /**
             * Encodes the specified LoadShopInformationRequest message. Does not implicitly {@link wm5.protobuf.LoadShopInformationRequest.verify|verify} messages.
             * @param message LoadShopInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadShopInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadShopInformationRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadShopInformationRequest.verify|verify} messages.
             * @param message LoadShopInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadShopInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadShopInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadShopInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadShopInformationRequest;

            /**
             * Decodes a LoadShopInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadShopInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadShopInformationRequest;

            /**
             * Verifies a LoadShopInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadShopInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadShopInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadShopInformationRequest;

            /**
             * Creates a plain object from a LoadShopInformationRequest message. Also converts values to other types if specified.
             * @param message LoadShopInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadShopInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadShopInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadShopInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadShopInformationResponse. */
        interface ILoadShopInformationResponse {

            /** LoadShopInformationResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadShopInformationResponse items */
            items?: (wm5.protobuf.LoadShopInformationResponse.IShopItem[]|null);

            /** LoadShopInformationResponse shopState */
            shopState?: (wm5.protobuf.ShopState|null);

            /** LoadShopInformationResponse noticeUnlocked */
            noticeUnlocked: boolean;

            /** LoadShopInformationResponse repayingCampaign */
            repayingCampaign?: (wm5.protobuf.IRepayingCampaignSchedule|null);

            /** LoadShopInformationResponse campaignExpendedMaxiGold */
            campaignExpendedMaxiGold?: (number|null);
        }

        /** Represents a LoadShopInformationResponse. */
        class LoadShopInformationResponse implements ILoadShopInformationResponse {

            /**
             * Constructs a new LoadShopInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadShopInformationResponse);

            /** LoadShopInformationResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadShopInformationResponse items. */
            public items: wm5.protobuf.LoadShopInformationResponse.IShopItem[];

            /** LoadShopInformationResponse shopState. */
            public shopState: wm5.protobuf.ShopState;

            /** LoadShopInformationResponse noticeUnlocked. */
            public noticeUnlocked: boolean;

            /** LoadShopInformationResponse repayingCampaign. */
            public repayingCampaign?: (wm5.protobuf.IRepayingCampaignSchedule|null);

            /** LoadShopInformationResponse campaignExpendedMaxiGold. */
            public campaignExpendedMaxiGold: number;

            /**
             * Creates a new LoadShopInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadShopInformationResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadShopInformationResponse): wm5.protobuf.LoadShopInformationResponse;

            /**
             * Encodes the specified LoadShopInformationResponse message. Does not implicitly {@link wm5.protobuf.LoadShopInformationResponse.verify|verify} messages.
             * @param message LoadShopInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadShopInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadShopInformationResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadShopInformationResponse.verify|verify} messages.
             * @param message LoadShopInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadShopInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadShopInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadShopInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadShopInformationResponse;

            /**
             * Decodes a LoadShopInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadShopInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadShopInformationResponse;

            /**
             * Verifies a LoadShopInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadShopInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadShopInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadShopInformationResponse;

            /**
             * Creates a plain object from a LoadShopInformationResponse message. Also converts values to other types if specified.
             * @param message LoadShopInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadShopInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadShopInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadShopInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoadShopInformationResponse {

            /** Properties of a ShopItem. */
            interface IShopItem {

                /** ShopItem category */
                category: wm5.protobuf.ItemCategory;

                /** ShopItem itemId */
                itemId: number;

                /** ShopItem price */
                price: number;

                /** ShopItem discountPrice */
                discountPrice?: (number|null);

                /** ShopItem recommended */
                recommended: boolean;

                /** ShopItem isNew */
                isNew: boolean;

                /** ShopItem saleUntil */
                saleUntil?: (number|null);

                /** ShopItem shopGrade */
                shopGrade: number;
            }

            /** Represents a ShopItem. */
            class ShopItem implements IShopItem {

                /**
                 * Constructs a new ShopItem.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.LoadShopInformationResponse.IShopItem);

                /** ShopItem category. */
                public category: wm5.protobuf.ItemCategory;

                /** ShopItem itemId. */
                public itemId: number;

                /** ShopItem price. */
                public price: number;

                /** ShopItem discountPrice. */
                public discountPrice: number;

                /** ShopItem recommended. */
                public recommended: boolean;

                /** ShopItem isNew. */
                public isNew: boolean;

                /** ShopItem saleUntil. */
                public saleUntil: number;

                /** ShopItem shopGrade. */
                public shopGrade: number;

                /**
                 * Creates a new ShopItem instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ShopItem instance
                 */
                public static create(properties?: wm5.protobuf.LoadShopInformationResponse.IShopItem): wm5.protobuf.LoadShopInformationResponse.ShopItem;

                /**
                 * Encodes the specified ShopItem message. Does not implicitly {@link wm5.protobuf.LoadShopInformationResponse.ShopItem.verify|verify} messages.
                 * @param message ShopItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.LoadShopInformationResponse.IShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ShopItem message, length delimited. Does not implicitly {@link wm5.protobuf.LoadShopInformationResponse.ShopItem.verify|verify} messages.
                 * @param message ShopItem message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.LoadShopInformationResponse.IShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ShopItem message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ShopItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadShopInformationResponse.ShopItem;

                /**
                 * Decodes a ShopItem message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ShopItem
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadShopInformationResponse.ShopItem;

                /**
                 * Verifies a ShopItem message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ShopItem message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ShopItem
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadShopInformationResponse.ShopItem;

                /**
                 * Creates a plain object from a ShopItem message. Also converts values to other types if specified.
                 * @param message ShopItem
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.LoadShopInformationResponse.ShopItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ShopItem to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ShopItem
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a ReceiveMaxiGoldRequest. */
        interface IReceiveMaxiGoldRequest {

            /** ReceiveMaxiGoldRequest userId */
            userId: number;
        }

        /** Represents a ReceiveMaxiGoldRequest. */
        class ReceiveMaxiGoldRequest implements IReceiveMaxiGoldRequest {

            /**
             * Constructs a new ReceiveMaxiGoldRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IReceiveMaxiGoldRequest);

            /** ReceiveMaxiGoldRequest userId. */
            public userId: number;

            /**
             * Creates a new ReceiveMaxiGoldRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveMaxiGoldRequest instance
             */
            public static create(properties?: wm5.protobuf.IReceiveMaxiGoldRequest): wm5.protobuf.ReceiveMaxiGoldRequest;

            /**
             * Encodes the specified ReceiveMaxiGoldRequest message. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldRequest.verify|verify} messages.
             * @param message ReceiveMaxiGoldRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IReceiveMaxiGoldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveMaxiGoldRequest message, length delimited. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldRequest.verify|verify} messages.
             * @param message ReceiveMaxiGoldRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IReceiveMaxiGoldRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveMaxiGoldRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveMaxiGoldRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ReceiveMaxiGoldRequest;

            /**
             * Decodes a ReceiveMaxiGoldRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveMaxiGoldRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ReceiveMaxiGoldRequest;

            /**
             * Verifies a ReceiveMaxiGoldRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveMaxiGoldRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveMaxiGoldRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ReceiveMaxiGoldRequest;

            /**
             * Creates a plain object from a ReceiveMaxiGoldRequest message. Also converts values to other types if specified.
             * @param message ReceiveMaxiGoldRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ReceiveMaxiGoldRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveMaxiGoldRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveMaxiGoldRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiveMaxiGoldResponse. */
        interface IReceiveMaxiGoldResponse {

            /** ReceiveMaxiGoldResponse error */
            error: wm5.protobuf.ErrorCode;

            /** ReceiveMaxiGoldResponse maxiGoldBefore */
            maxiGoldBefore: number;

            /** ReceiveMaxiGoldResponse maxiGoldAfter */
            maxiGoldAfter: number;

            /** ReceiveMaxiGoldResponse income */
            income?: (wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry[]|null);

            /** ReceiveMaxiGoldResponse ownedUserItems */
            ownedUserItems?: (wm5.protobuf.IUserItem[]|null);
        }

        /** Represents a ReceiveMaxiGoldResponse. */
        class ReceiveMaxiGoldResponse implements IReceiveMaxiGoldResponse {

            /**
             * Constructs a new ReceiveMaxiGoldResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IReceiveMaxiGoldResponse);

            /** ReceiveMaxiGoldResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** ReceiveMaxiGoldResponse maxiGoldBefore. */
            public maxiGoldBefore: number;

            /** ReceiveMaxiGoldResponse maxiGoldAfter. */
            public maxiGoldAfter: number;

            /** ReceiveMaxiGoldResponse income. */
            public income: wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry[];

            /** ReceiveMaxiGoldResponse ownedUserItems. */
            public ownedUserItems: wm5.protobuf.IUserItem[];

            /**
             * Creates a new ReceiveMaxiGoldResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveMaxiGoldResponse instance
             */
            public static create(properties?: wm5.protobuf.IReceiveMaxiGoldResponse): wm5.protobuf.ReceiveMaxiGoldResponse;

            /**
             * Encodes the specified ReceiveMaxiGoldResponse message. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldResponse.verify|verify} messages.
             * @param message ReceiveMaxiGoldResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IReceiveMaxiGoldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveMaxiGoldResponse message, length delimited. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldResponse.verify|verify} messages.
             * @param message ReceiveMaxiGoldResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IReceiveMaxiGoldResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveMaxiGoldResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveMaxiGoldResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ReceiveMaxiGoldResponse;

            /**
             * Decodes a ReceiveMaxiGoldResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveMaxiGoldResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ReceiveMaxiGoldResponse;

            /**
             * Verifies a ReceiveMaxiGoldResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveMaxiGoldResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveMaxiGoldResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ReceiveMaxiGoldResponse;

            /**
             * Creates a plain object from a ReceiveMaxiGoldResponse message. Also converts values to other types if specified.
             * @param message ReceiveMaxiGoldResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ReceiveMaxiGoldResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveMaxiGoldResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveMaxiGoldResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ReceiveMaxiGoldResponse {

            /** Properties of an IncomeEntry. */
            interface IIncomeEntry {

                /** IncomeEntry datetime */
                datetime: number;

                /** IncomeEntry isUtc */
                isUtc: boolean;

                /** IncomeEntry incomeType */
                incomeType: wm5.protobuf.MaxiGoldIncomeType;

                /** IncomeEntry amount */
                amount: number;
            }

            /** Represents an IncomeEntry. */
            class IncomeEntry implements IIncomeEntry {

                /**
                 * Constructs a new IncomeEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry);

                /** IncomeEntry datetime. */
                public datetime: number;

                /** IncomeEntry isUtc. */
                public isUtc: boolean;

                /** IncomeEntry incomeType. */
                public incomeType: wm5.protobuf.MaxiGoldIncomeType;

                /** IncomeEntry amount. */
                public amount: number;

                /**
                 * Creates a new IncomeEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IncomeEntry instance
                 */
                public static create(properties?: wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry): wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry;

                /**
                 * Encodes the specified IncomeEntry message. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry.verify|verify} messages.
                 * @param message IncomeEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IncomeEntry message, length delimited. Does not implicitly {@link wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry.verify|verify} messages.
                 * @param message IncomeEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.ReceiveMaxiGoldResponse.IIncomeEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IncomeEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IncomeEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry;

                /**
                 * Decodes an IncomeEntry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IncomeEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry;

                /**
                 * Verifies an IncomeEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IncomeEntry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IncomeEntry
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry;

                /**
                 * Creates a plain object from an IncomeEntry message. Also converts values to other types if specified.
                 * @param message IncomeEntry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.ReceiveMaxiGoldResponse.IncomeEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IncomeEntry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for IncomeEntry
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a StartTransferRequest. */
        interface IStartTransferRequest {

            /** StartTransferRequest banapassportAmId */
            banapassportAmId: number;
        }

        /** Represents a StartTransferRequest. */
        class StartTransferRequest implements IStartTransferRequest {

            /**
             * Constructs a new StartTransferRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IStartTransferRequest);

            /** StartTransferRequest banapassportAmId. */
            public banapassportAmId: number;

            /**
             * Creates a new StartTransferRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartTransferRequest instance
             */
            public static create(properties?: wm5.protobuf.IStartTransferRequest): wm5.protobuf.StartTransferRequest;

            /**
             * Encodes the specified StartTransferRequest message. Does not implicitly {@link wm5.protobuf.StartTransferRequest.verify|verify} messages.
             * @param message StartTransferRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IStartTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartTransferRequest message, length delimited. Does not implicitly {@link wm5.protobuf.StartTransferRequest.verify|verify} messages.
             * @param message StartTransferRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IStartTransferRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartTransferRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartTransferRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.StartTransferRequest;

            /**
             * Decodes a StartTransferRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartTransferRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.StartTransferRequest;

            /**
             * Verifies a StartTransferRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartTransferRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartTransferRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.StartTransferRequest;

            /**
             * Creates a plain object from a StartTransferRequest message. Also converts values to other types if specified.
             * @param message StartTransferRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.StartTransferRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartTransferRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartTransferRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartTransferResponse. */
        interface IStartTransferResponse {

            /** StartTransferResponse error */
            error: wm5.protobuf.ErrorCode;

            /** StartTransferResponse userId */
            userId: number;

            /** StartTransferResponse pollingInterval */
            pollingInterval?: (number|null);
        }

        /** Represents a StartTransferResponse. */
        class StartTransferResponse implements IStartTransferResponse {

            /**
             * Constructs a new StartTransferResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IStartTransferResponse);

            /** StartTransferResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** StartTransferResponse userId. */
            public userId: number;

            /** StartTransferResponse pollingInterval. */
            public pollingInterval: number;

            /**
             * Creates a new StartTransferResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartTransferResponse instance
             */
            public static create(properties?: wm5.protobuf.IStartTransferResponse): wm5.protobuf.StartTransferResponse;

            /**
             * Encodes the specified StartTransferResponse message. Does not implicitly {@link wm5.protobuf.StartTransferResponse.verify|verify} messages.
             * @param message StartTransferResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IStartTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartTransferResponse message, length delimited. Does not implicitly {@link wm5.protobuf.StartTransferResponse.verify|verify} messages.
             * @param message StartTransferResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IStartTransferResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartTransferResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartTransferResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.StartTransferResponse;

            /**
             * Decodes a StartTransferResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartTransferResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.StartTransferResponse;

            /**
             * Verifies a StartTransferResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartTransferResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartTransferResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.StartTransferResponse;

            /**
             * Creates a plain object from a StartTransferResponse message. Also converts values to other types if specified.
             * @param message StartTransferResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.StartTransferResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartTransferResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartTransferResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RenameCarRequest. */
        interface IRenameCarRequest {

            /** RenameCarRequest carId */
            carId: number;

            /** RenameCarRequest name */
            name: string;
        }

        /** Represents a RenameCarRequest. */
        class RenameCarRequest implements IRenameCarRequest {

            /**
             * Constructs a new RenameCarRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRenameCarRequest);

            /** RenameCarRequest carId. */
            public carId: number;

            /** RenameCarRequest name. */
            public name: string;

            /**
             * Creates a new RenameCarRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameCarRequest instance
             */
            public static create(properties?: wm5.protobuf.IRenameCarRequest): wm5.protobuf.RenameCarRequest;

            /**
             * Encodes the specified RenameCarRequest message. Does not implicitly {@link wm5.protobuf.RenameCarRequest.verify|verify} messages.
             * @param message RenameCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRenameCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameCarRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RenameCarRequest.verify|verify} messages.
             * @param message RenameCarRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRenameCarRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameCarRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RenameCarRequest;

            /**
             * Decodes a RenameCarRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameCarRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RenameCarRequest;

            /**
             * Verifies a RenameCarRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameCarRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameCarRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RenameCarRequest;

            /**
             * Creates a plain object from a RenameCarRequest message. Also converts values to other types if specified.
             * @param message RenameCarRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RenameCarRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameCarRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RenameCarRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RenameCarResponse. */
        interface IRenameCarResponse {

            /** RenameCarResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a RenameCarResponse. */
        class RenameCarResponse implements IRenameCarResponse {

            /**
             * Constructs a new RenameCarResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRenameCarResponse);

            /** RenameCarResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new RenameCarResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameCarResponse instance
             */
            public static create(properties?: wm5.protobuf.IRenameCarResponse): wm5.protobuf.RenameCarResponse;

            /**
             * Encodes the specified RenameCarResponse message. Does not implicitly {@link wm5.protobuf.RenameCarResponse.verify|verify} messages.
             * @param message RenameCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRenameCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameCarResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RenameCarResponse.verify|verify} messages.
             * @param message RenameCarResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRenameCarResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameCarResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RenameCarResponse;

            /**
             * Decodes a RenameCarResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameCarResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RenameCarResponse;

            /**
             * Verifies a RenameCarResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameCarResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameCarResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RenameCarResponse;

            /**
             * Creates a plain object from a RenameCarResponse message. Also converts values to other types if specified.
             * @param message RenameCarResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RenameCarResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameCarResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RenameCarResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RenameTeamRequest. */
        interface IRenameTeamRequest {

            /** RenameTeamRequest userId */
            userId: number;

            /** RenameTeamRequest teamName */
            teamName: string;
        }

        /** Represents a RenameTeamRequest. */
        class RenameTeamRequest implements IRenameTeamRequest {

            /**
             * Constructs a new RenameTeamRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRenameTeamRequest);

            /** RenameTeamRequest userId. */
            public userId: number;

            /** RenameTeamRequest teamName. */
            public teamName: string;

            /**
             * Creates a new RenameTeamRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameTeamRequest instance
             */
            public static create(properties?: wm5.protobuf.IRenameTeamRequest): wm5.protobuf.RenameTeamRequest;

            /**
             * Encodes the specified RenameTeamRequest message. Does not implicitly {@link wm5.protobuf.RenameTeamRequest.verify|verify} messages.
             * @param message RenameTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRenameTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameTeamRequest message, length delimited. Does not implicitly {@link wm5.protobuf.RenameTeamRequest.verify|verify} messages.
             * @param message RenameTeamRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRenameTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameTeamRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RenameTeamRequest;

            /**
             * Decodes a RenameTeamRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameTeamRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RenameTeamRequest;

            /**
             * Verifies a RenameTeamRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameTeamRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameTeamRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RenameTeamRequest;

            /**
             * Creates a plain object from a RenameTeamRequest message. Also converts values to other types if specified.
             * @param message RenameTeamRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RenameTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameTeamRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RenameTeamRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RenameTeamResponse. */
        interface IRenameTeamResponse {

            /** RenameTeamResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a RenameTeamResponse. */
        class RenameTeamResponse implements IRenameTeamResponse {

            /**
             * Constructs a new RenameTeamResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRenameTeamResponse);

            /** RenameTeamResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new RenameTeamResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RenameTeamResponse instance
             */
            public static create(properties?: wm5.protobuf.IRenameTeamResponse): wm5.protobuf.RenameTeamResponse;

            /**
             * Encodes the specified RenameTeamResponse message. Does not implicitly {@link wm5.protobuf.RenameTeamResponse.verify|verify} messages.
             * @param message RenameTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRenameTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RenameTeamResponse message, length delimited. Does not implicitly {@link wm5.protobuf.RenameTeamResponse.verify|verify} messages.
             * @param message RenameTeamResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRenameTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RenameTeamResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RenameTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RenameTeamResponse;

            /**
             * Decodes a RenameTeamResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RenameTeamResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RenameTeamResponse;

            /**
             * Verifies a RenameTeamResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RenameTeamResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RenameTeamResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RenameTeamResponse;

            /**
             * Creates a plain object from a RenameTeamResponse message. Also converts values to other types if specified.
             * @param message RenameTeamResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RenameTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RenameTeamResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RenameTeamResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadBingoInformationRequest. */
        interface ILoadBingoInformationRequest {

            /** LoadBingoInformationRequest carId */
            carId: number;

            /** LoadBingoInformationRequest bingoEventId */
            bingoEventId: number;
        }

        /** Represents a LoadBingoInformationRequest. */
        class LoadBingoInformationRequest implements ILoadBingoInformationRequest {

            /**
             * Constructs a new LoadBingoInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadBingoInformationRequest);

            /** LoadBingoInformationRequest carId. */
            public carId: number;

            /** LoadBingoInformationRequest bingoEventId. */
            public bingoEventId: number;

            /**
             * Creates a new LoadBingoInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadBingoInformationRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadBingoInformationRequest): wm5.protobuf.LoadBingoInformationRequest;

            /**
             * Encodes the specified LoadBingoInformationRequest message. Does not implicitly {@link wm5.protobuf.LoadBingoInformationRequest.verify|verify} messages.
             * @param message LoadBingoInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadBingoInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadBingoInformationRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadBingoInformationRequest.verify|verify} messages.
             * @param message LoadBingoInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadBingoInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadBingoInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadBingoInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadBingoInformationRequest;

            /**
             * Decodes a LoadBingoInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadBingoInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadBingoInformationRequest;

            /**
             * Verifies a LoadBingoInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadBingoInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadBingoInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadBingoInformationRequest;

            /**
             * Creates a plain object from a LoadBingoInformationRequest message. Also converts values to other types if specified.
             * @param message LoadBingoInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadBingoInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadBingoInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadBingoInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadBingoInformationResponse. */
        interface ILoadBingoInformationResponse {

            /** LoadBingoInformationResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadBingoInformationResponse bingoSchedule */
            bingoSchedule: wm5.protobuf.IBingoSchedule;

            /** LoadBingoInformationResponse bingoCard */
            bingoCard?: (wm5.protobuf.IBingoCard|null);

            /** LoadBingoInformationResponse mark */
            mark?: (boolean[]|null);

            /** LoadBingoInformationResponse numOfCompletions */
            numOfCompletions: number;

            /** LoadBingoInformationResponse stockedNames */
            stockedNames?: (string[]|null);

            /** LoadBingoInformationResponse carIdsOfStockedName */
            carIdsOfStockedName?: (number[]|null);

            /** LoadBingoInformationResponse numOfDeletions */
            numOfDeletions: number;
        }

        /** Represents a LoadBingoInformationResponse. */
        class LoadBingoInformationResponse implements ILoadBingoInformationResponse {

            /**
             * Constructs a new LoadBingoInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadBingoInformationResponse);

            /** LoadBingoInformationResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadBingoInformationResponse bingoSchedule. */
            public bingoSchedule: wm5.protobuf.IBingoSchedule;

            /** LoadBingoInformationResponse bingoCard. */
            public bingoCard?: (wm5.protobuf.IBingoCard|null);

            /** LoadBingoInformationResponse mark. */
            public mark: boolean[];

            /** LoadBingoInformationResponse numOfCompletions. */
            public numOfCompletions: number;

            /** LoadBingoInformationResponse stockedNames. */
            public stockedNames: string[];

            /** LoadBingoInformationResponse carIdsOfStockedName. */
            public carIdsOfStockedName: number[];

            /** LoadBingoInformationResponse numOfDeletions. */
            public numOfDeletions: number;

            /**
             * Creates a new LoadBingoInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadBingoInformationResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadBingoInformationResponse): wm5.protobuf.LoadBingoInformationResponse;

            /**
             * Encodes the specified LoadBingoInformationResponse message. Does not implicitly {@link wm5.protobuf.LoadBingoInformationResponse.verify|verify} messages.
             * @param message LoadBingoInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadBingoInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadBingoInformationResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadBingoInformationResponse.verify|verify} messages.
             * @param message LoadBingoInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadBingoInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadBingoInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadBingoInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadBingoInformationResponse;

            /**
             * Decodes a LoadBingoInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadBingoInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadBingoInformationResponse;

            /**
             * Verifies a LoadBingoInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadBingoInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadBingoInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadBingoInformationResponse;

            /**
             * Creates a plain object from a LoadBingoInformationResponse message. Also converts values to other types if specified.
             * @param message LoadBingoInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadBingoInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadBingoInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadBingoInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateBingoCardRequest. */
        interface ICreateBingoCardRequest {

            /** CreateBingoCardRequest carId */
            carId: number;
        }

        /** Represents a CreateBingoCardRequest. */
        class CreateBingoCardRequest implements ICreateBingoCardRequest {

            /**
             * Constructs a new CreateBingoCardRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateBingoCardRequest);

            /** CreateBingoCardRequest carId. */
            public carId: number;

            /**
             * Creates a new CreateBingoCardRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateBingoCardRequest instance
             */
            public static create(properties?: wm5.protobuf.ICreateBingoCardRequest): wm5.protobuf.CreateBingoCardRequest;

            /**
             * Encodes the specified CreateBingoCardRequest message. Does not implicitly {@link wm5.protobuf.CreateBingoCardRequest.verify|verify} messages.
             * @param message CreateBingoCardRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateBingoCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateBingoCardRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CreateBingoCardRequest.verify|verify} messages.
             * @param message CreateBingoCardRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateBingoCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateBingoCardRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateBingoCardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateBingoCardRequest;

            /**
             * Decodes a CreateBingoCardRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateBingoCardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateBingoCardRequest;

            /**
             * Verifies a CreateBingoCardRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateBingoCardRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateBingoCardRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateBingoCardRequest;

            /**
             * Creates a plain object from a CreateBingoCardRequest message. Also converts values to other types if specified.
             * @param message CreateBingoCardRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateBingoCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateBingoCardRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateBingoCardRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateBingoCardResponse. */
        interface ICreateBingoCardResponse {

            /** CreateBingoCardResponse error */
            error: wm5.protobuf.ErrorCode;

            /** CreateBingoCardResponse bingoCard1 */
            bingoCard1: wm5.protobuf.IBingoCard;

            /** CreateBingoCardResponse bingoCard2 */
            bingoCard2: wm5.protobuf.IBingoCard;

            /** CreateBingoCardResponse bingoCard3 */
            bingoCard3: wm5.protobuf.IBingoCard;
        }

        /** Represents a CreateBingoCardResponse. */
        class CreateBingoCardResponse implements ICreateBingoCardResponse {

            /**
             * Constructs a new CreateBingoCardResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICreateBingoCardResponse);

            /** CreateBingoCardResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** CreateBingoCardResponse bingoCard1. */
            public bingoCard1: wm5.protobuf.IBingoCard;

            /** CreateBingoCardResponse bingoCard2. */
            public bingoCard2: wm5.protobuf.IBingoCard;

            /** CreateBingoCardResponse bingoCard3. */
            public bingoCard3: wm5.protobuf.IBingoCard;

            /**
             * Creates a new CreateBingoCardResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateBingoCardResponse instance
             */
            public static create(properties?: wm5.protobuf.ICreateBingoCardResponse): wm5.protobuf.CreateBingoCardResponse;

            /**
             * Encodes the specified CreateBingoCardResponse message. Does not implicitly {@link wm5.protobuf.CreateBingoCardResponse.verify|verify} messages.
             * @param message CreateBingoCardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICreateBingoCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateBingoCardResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CreateBingoCardResponse.verify|verify} messages.
             * @param message CreateBingoCardResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICreateBingoCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateBingoCardResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateBingoCardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CreateBingoCardResponse;

            /**
             * Decodes a CreateBingoCardResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateBingoCardResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CreateBingoCardResponse;

            /**
             * Verifies a CreateBingoCardResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateBingoCardResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateBingoCardResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CreateBingoCardResponse;

            /**
             * Creates a plain object from a CreateBingoCardResponse message. Also converts values to other types if specified.
             * @param message CreateBingoCardResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CreateBingoCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateBingoCardResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateBingoCardResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveBingoResultRequest. */
        interface ISaveBingoResultRequest {

            /** SaveBingoResultRequest carId */
            carId: number;

            /** SaveBingoResultRequest numOfDeletions */
            numOfDeletions: number;

            /** SaveBingoResultRequest carIdsOfConsumedName */
            carIdsOfConsumedName?: (number[]|null);

            /** SaveBingoResultRequest mark */
            mark?: (boolean[]|null);

            /** SaveBingoResultRequest completed */
            completed?: (boolean|null);
        }

        /** Represents a SaveBingoResultRequest. */
        class SaveBingoResultRequest implements ISaveBingoResultRequest {

            /**
             * Constructs a new SaveBingoResultRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveBingoResultRequest);

            /** SaveBingoResultRequest carId. */
            public carId: number;

            /** SaveBingoResultRequest numOfDeletions. */
            public numOfDeletions: number;

            /** SaveBingoResultRequest carIdsOfConsumedName. */
            public carIdsOfConsumedName: number[];

            /** SaveBingoResultRequest mark. */
            public mark: boolean[];

            /** SaveBingoResultRequest completed. */
            public completed: boolean;

            /**
             * Creates a new SaveBingoResultRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveBingoResultRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveBingoResultRequest): wm5.protobuf.SaveBingoResultRequest;

            /**
             * Encodes the specified SaveBingoResultRequest message. Does not implicitly {@link wm5.protobuf.SaveBingoResultRequest.verify|verify} messages.
             * @param message SaveBingoResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveBingoResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveBingoResultRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveBingoResultRequest.verify|verify} messages.
             * @param message SaveBingoResultRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveBingoResultRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveBingoResultRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveBingoResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveBingoResultRequest;

            /**
             * Decodes a SaveBingoResultRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveBingoResultRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveBingoResultRequest;

            /**
             * Verifies a SaveBingoResultRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveBingoResultRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveBingoResultRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveBingoResultRequest;

            /**
             * Creates a plain object from a SaveBingoResultRequest message. Also converts values to other types if specified.
             * @param message SaveBingoResultRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveBingoResultRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveBingoResultRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveBingoResultRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveBingoResultResponse. */
        interface ISaveBingoResultResponse {

            /** SaveBingoResultResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveBingoResultResponse. */
        class SaveBingoResultResponse implements ISaveBingoResultResponse {

            /**
             * Constructs a new SaveBingoResultResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveBingoResultResponse);

            /** SaveBingoResultResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveBingoResultResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveBingoResultResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveBingoResultResponse): wm5.protobuf.SaveBingoResultResponse;

            /**
             * Encodes the specified SaveBingoResultResponse message. Does not implicitly {@link wm5.protobuf.SaveBingoResultResponse.verify|verify} messages.
             * @param message SaveBingoResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveBingoResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveBingoResultResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveBingoResultResponse.verify|verify} messages.
             * @param message SaveBingoResultResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveBingoResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveBingoResultResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveBingoResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveBingoResultResponse;

            /**
             * Decodes a SaveBingoResultResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveBingoResultResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveBingoResultResponse;

            /**
             * Verifies a SaveBingoResultResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveBingoResultResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveBingoResultResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveBingoResultResponse;

            /**
             * Creates a plain object from a SaveBingoResultResponse message. Also converts values to other types if specified.
             * @param message SaveBingoResultResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveBingoResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveBingoResultResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveBingoResultResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScreenshotRequest. */
        interface ISaveScreenshotRequest {

            /** SaveScreenshotRequest carId */
            carId: number;

            /** SaveScreenshotRequest timestamp */
            timestamp: number;

            /** SaveScreenshotRequest imageType */
            imageType: wm5.protobuf.ScreenshotType;

            /** SaveScreenshotRequest image */
            image: Uint8Array;

            /** SaveScreenshotRequest ghostMetadata */
            ghostMetadata?: (wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage|null);

            /** SaveScreenshotRequest versusMetadata */
            versusMetadata?: (wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage|null);

            /** SaveScreenshotRequest terminalMetadata */
            terminalMetadata?: (wm5.protobuf.SaveScreenshotRequest.ITerminalImage|null);
        }

        /** Represents a SaveScreenshotRequest. */
        class SaveScreenshotRequest implements ISaveScreenshotRequest {

            /**
             * Constructs a new SaveScreenshotRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveScreenshotRequest);

            /** SaveScreenshotRequest carId. */
            public carId: number;

            /** SaveScreenshotRequest timestamp. */
            public timestamp: number;

            /** SaveScreenshotRequest imageType. */
            public imageType: wm5.protobuf.ScreenshotType;

            /** SaveScreenshotRequest image. */
            public image: Uint8Array;

            /** SaveScreenshotRequest ghostMetadata. */
            public ghostMetadata?: (wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage|null);

            /** SaveScreenshotRequest versusMetadata. */
            public versusMetadata?: (wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage|null);

            /** SaveScreenshotRequest terminalMetadata. */
            public terminalMetadata?: (wm5.protobuf.SaveScreenshotRequest.ITerminalImage|null);

            /**
             * Creates a new SaveScreenshotRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScreenshotRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveScreenshotRequest): wm5.protobuf.SaveScreenshotRequest;

            /**
             * Encodes the specified SaveScreenshotRequest message. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.verify|verify} messages.
             * @param message SaveScreenshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScreenshotRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.verify|verify} messages.
             * @param message SaveScreenshotRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveScreenshotRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScreenshotRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScreenshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotRequest;

            /**
             * Decodes a SaveScreenshotRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScreenshotRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotRequest;

            /**
             * Verifies a SaveScreenshotRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScreenshotRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScreenshotRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotRequest;

            /**
             * Creates a plain object from a SaveScreenshotRequest message. Also converts values to other types if specified.
             * @param message SaveScreenshotRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveScreenshotRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScreenshotRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScreenshotRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SaveScreenshotRequest {

            /** Properties of a GhostBattleImage. */
            interface IGhostBattleImage {

                /** GhostBattleImage tunePower */
                tunePower: number;

                /** GhostBattleImage tuneHandling */
                tuneHandling: number;

                /** GhostBattleImage area */
                area: number;

                /** GhostBattleImage stampReturnCount */
                stampReturnCount: number;

                /** GhostBattleImage opponent */
                opponent: wm5.protobuf.SaveScreenshotRequest.IOpponentCar;
            }

            /** Represents a GhostBattleImage. */
            class GhostBattleImage implements IGhostBattleImage {

                /**
                 * Constructs a new GhostBattleImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage);

                /** GhostBattleImage tunePower. */
                public tunePower: number;

                /** GhostBattleImage tuneHandling. */
                public tuneHandling: number;

                /** GhostBattleImage area. */
                public area: number;

                /** GhostBattleImage stampReturnCount. */
                public stampReturnCount: number;

                /** GhostBattleImage opponent. */
                public opponent: wm5.protobuf.SaveScreenshotRequest.IOpponentCar;

                /**
                 * Creates a new GhostBattleImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GhostBattleImage instance
                 */
                public static create(properties?: wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage): wm5.protobuf.SaveScreenshotRequest.GhostBattleImage;

                /**
                 * Encodes the specified GhostBattleImage message. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.GhostBattleImage.verify|verify} messages.
                 * @param message GhostBattleImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GhostBattleImage message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.GhostBattleImage.verify|verify} messages.
                 * @param message GhostBattleImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveScreenshotRequest.IGhostBattleImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GhostBattleImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GhostBattleImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotRequest.GhostBattleImage;

                /**
                 * Decodes a GhostBattleImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GhostBattleImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotRequest.GhostBattleImage;

                /**
                 * Verifies a GhostBattleImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GhostBattleImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GhostBattleImage
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotRequest.GhostBattleImage;

                /**
                 * Creates a plain object from a GhostBattleImage message. Also converts values to other types if specified.
                 * @param message GhostBattleImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveScreenshotRequest.GhostBattleImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GhostBattleImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for GhostBattleImage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a VersusBattleImage. */
            interface IVersusBattleImage {

                /** VersusBattleImage tunePower */
                tunePower: number;

                /** VersusBattleImage tuneHandling */
                tuneHandling: number;

                /** VersusBattleImage area */
                area: number;

                /** VersusBattleImage opponents */
                opponents?: (wm5.protobuf.SaveScreenshotRequest.IOpponentCar[]|null);
            }

            /** Represents a VersusBattleImage. */
            class VersusBattleImage implements IVersusBattleImage {

                /**
                 * Constructs a new VersusBattleImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage);

                /** VersusBattleImage tunePower. */
                public tunePower: number;

                /** VersusBattleImage tuneHandling. */
                public tuneHandling: number;

                /** VersusBattleImage area. */
                public area: number;

                /** VersusBattleImage opponents. */
                public opponents: wm5.protobuf.SaveScreenshotRequest.IOpponentCar[];

                /**
                 * Creates a new VersusBattleImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VersusBattleImage instance
                 */
                public static create(properties?: wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage): wm5.protobuf.SaveScreenshotRequest.VersusBattleImage;

                /**
                 * Encodes the specified VersusBattleImage message. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.VersusBattleImage.verify|verify} messages.
                 * @param message VersusBattleImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VersusBattleImage message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.VersusBattleImage.verify|verify} messages.
                 * @param message VersusBattleImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveScreenshotRequest.IVersusBattleImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VersusBattleImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VersusBattleImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotRequest.VersusBattleImage;

                /**
                 * Decodes a VersusBattleImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VersusBattleImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotRequest.VersusBattleImage;

                /**
                 * Verifies a VersusBattleImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VersusBattleImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VersusBattleImage
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotRequest.VersusBattleImage;

                /**
                 * Creates a plain object from a VersusBattleImage message. Also converts values to other types if specified.
                 * @param message VersusBattleImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveScreenshotRequest.VersusBattleImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VersusBattleImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VersusBattleImage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a TerminalImage. */
            interface ITerminalImage {
            }

            /** Represents a TerminalImage. */
            class TerminalImage implements ITerminalImage {

                /**
                 * Constructs a new TerminalImage.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveScreenshotRequest.ITerminalImage);

                /**
                 * Creates a new TerminalImage instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TerminalImage instance
                 */
                public static create(properties?: wm5.protobuf.SaveScreenshotRequest.ITerminalImage): wm5.protobuf.SaveScreenshotRequest.TerminalImage;

                /**
                 * Encodes the specified TerminalImage message. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.TerminalImage.verify|verify} messages.
                 * @param message TerminalImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveScreenshotRequest.ITerminalImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TerminalImage message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.TerminalImage.verify|verify} messages.
                 * @param message TerminalImage message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveScreenshotRequest.ITerminalImage, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TerminalImage message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TerminalImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotRequest.TerminalImage;

                /**
                 * Decodes a TerminalImage message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TerminalImage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotRequest.TerminalImage;

                /**
                 * Verifies a TerminalImage message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TerminalImage message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TerminalImage
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotRequest.TerminalImage;

                /**
                 * Creates a plain object from a TerminalImage message. Also converts values to other types if specified.
                 * @param message TerminalImage
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveScreenshotRequest.TerminalImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TerminalImage to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for TerminalImage
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OpponentCar. */
            interface IOpponentCar {

                /** OpponentCar carId */
                carId?: (number|null);

                /** OpponentCar tunePower */
                tunePower: number;

                /** OpponentCar tuneHandling */
                tuneHandling: number;
            }

            /** Represents an OpponentCar. */
            class OpponentCar implements IOpponentCar {

                /**
                 * Constructs a new OpponentCar.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.SaveScreenshotRequest.IOpponentCar);

                /** OpponentCar carId. */
                public carId: number;

                /** OpponentCar tunePower. */
                public tunePower: number;

                /** OpponentCar tuneHandling. */
                public tuneHandling: number;

                /**
                 * Creates a new OpponentCar instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OpponentCar instance
                 */
                public static create(properties?: wm5.protobuf.SaveScreenshotRequest.IOpponentCar): wm5.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Encodes the specified OpponentCar message. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.OpponentCar.verify|verify} messages.
                 * @param message OpponentCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.SaveScreenshotRequest.IOpponentCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OpponentCar message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotRequest.OpponentCar.verify|verify} messages.
                 * @param message OpponentCar message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.SaveScreenshotRequest.IOpponentCar, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OpponentCar message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OpponentCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Decodes an OpponentCar message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OpponentCar
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Verifies an OpponentCar message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OpponentCar message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OpponentCar
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotRequest.OpponentCar;

                /**
                 * Creates a plain object from an OpponentCar message. Also converts values to other types if specified.
                 * @param message OpponentCar
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.SaveScreenshotRequest.OpponentCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OpponentCar to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OpponentCar
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SaveScreenshotResponse. */
        interface ISaveScreenshotResponse {

            /** SaveScreenshotResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveScreenshotResponse. */
        class SaveScreenshotResponse implements ISaveScreenshotResponse {

            /**
             * Constructs a new SaveScreenshotResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveScreenshotResponse);

            /** SaveScreenshotResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveScreenshotResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScreenshotResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveScreenshotResponse): wm5.protobuf.SaveScreenshotResponse;

            /**
             * Encodes the specified SaveScreenshotResponse message. Does not implicitly {@link wm5.protobuf.SaveScreenshotResponse.verify|verify} messages.
             * @param message SaveScreenshotResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScreenshotResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScreenshotResponse.verify|verify} messages.
             * @param message SaveScreenshotResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveScreenshotResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScreenshotResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScreenshotResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScreenshotResponse;

            /**
             * Decodes a SaveScreenshotResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScreenshotResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScreenshotResponse;

            /**
             * Verifies a SaveScreenshotResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScreenshotResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScreenshotResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScreenshotResponse;

            /**
             * Creates a plain object from a SaveScreenshotResponse message. Also converts values to other types if specified.
             * @param message SaveScreenshotResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveScreenshotResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScreenshotResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScreenshotResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveClientReportRequest. */
        interface ISaveClientReportRequest {

            /** SaveClientReportRequest report */
            report: Uint8Array;

            /** SaveClientReportRequest modifiedAt */
            modifiedAt: number;
        }

        /** Represents a SaveClientReportRequest. */
        class SaveClientReportRequest implements ISaveClientReportRequest {

            /**
             * Constructs a new SaveClientReportRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveClientReportRequest);

            /** SaveClientReportRequest report. */
            public report: Uint8Array;

            /** SaveClientReportRequest modifiedAt. */
            public modifiedAt: number;

            /**
             * Creates a new SaveClientReportRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveClientReportRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveClientReportRequest): wm5.protobuf.SaveClientReportRequest;

            /**
             * Encodes the specified SaveClientReportRequest message. Does not implicitly {@link wm5.protobuf.SaveClientReportRequest.verify|verify} messages.
             * @param message SaveClientReportRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveClientReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveClientReportRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveClientReportRequest.verify|verify} messages.
             * @param message SaveClientReportRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveClientReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveClientReportRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveClientReportRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveClientReportRequest;

            /**
             * Decodes a SaveClientReportRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveClientReportRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveClientReportRequest;

            /**
             * Verifies a SaveClientReportRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveClientReportRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveClientReportRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveClientReportRequest;

            /**
             * Creates a plain object from a SaveClientReportRequest message. Also converts values to other types if specified.
             * @param message SaveClientReportRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveClientReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveClientReportRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveClientReportRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveClientReportResponse. */
        interface ISaveClientReportResponse {

            /** SaveClientReportResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a SaveClientReportResponse. */
        class SaveClientReportResponse implements ISaveClientReportResponse {

            /**
             * Constructs a new SaveClientReportResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveClientReportResponse);

            /** SaveClientReportResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new SaveClientReportResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveClientReportResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveClientReportResponse): wm5.protobuf.SaveClientReportResponse;

            /**
             * Encodes the specified SaveClientReportResponse message. Does not implicitly {@link wm5.protobuf.SaveClientReportResponse.verify|verify} messages.
             * @param message SaveClientReportResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveClientReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveClientReportResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveClientReportResponse.verify|verify} messages.
             * @param message SaveClientReportResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveClientReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveClientReportResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveClientReportResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveClientReportResponse;

            /**
             * Decodes a SaveClientReportResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveClientReportResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveClientReportResponse;

            /**
             * Verifies a SaveClientReportResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveClientReportResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveClientReportResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveClientReportResponse;

            /**
             * Creates a plain object from a SaveClientReportResponse message. Also converts values to other types if specified.
             * @param message SaveClientReportResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveClientReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveClientReportResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveClientReportResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadScratchInformationRequest. */
        interface ILoadScratchInformationRequest {

            /** LoadScratchInformationRequest userId */
            userId: number;
        }

        /** Represents a LoadScratchInformationRequest. */
        class LoadScratchInformationRequest implements ILoadScratchInformationRequest {

            /**
             * Constructs a new LoadScratchInformationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadScratchInformationRequest);

            /** LoadScratchInformationRequest userId. */
            public userId: number;

            /**
             * Creates a new LoadScratchInformationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadScratchInformationRequest instance
             */
            public static create(properties?: wm5.protobuf.ILoadScratchInformationRequest): wm5.protobuf.LoadScratchInformationRequest;

            /**
             * Encodes the specified LoadScratchInformationRequest message. Does not implicitly {@link wm5.protobuf.LoadScratchInformationRequest.verify|verify} messages.
             * @param message LoadScratchInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadScratchInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadScratchInformationRequest message, length delimited. Does not implicitly {@link wm5.protobuf.LoadScratchInformationRequest.verify|verify} messages.
             * @param message LoadScratchInformationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadScratchInformationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadScratchInformationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadScratchInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadScratchInformationRequest;

            /**
             * Decodes a LoadScratchInformationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadScratchInformationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadScratchInformationRequest;

            /**
             * Verifies a LoadScratchInformationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadScratchInformationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadScratchInformationRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadScratchInformationRequest;

            /**
             * Creates a plain object from a LoadScratchInformationRequest message. Also converts values to other types if specified.
             * @param message LoadScratchInformationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadScratchInformationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadScratchInformationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadScratchInformationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LoadScratchInformationResponse. */
        interface ILoadScratchInformationResponse {

            /** LoadScratchInformationResponse error */
            error: wm5.protobuf.ErrorCode;

            /** LoadScratchInformationResponse scratchSheets */
            scratchSheets?: (wm5.protobuf.IScratchSheet[]|null);

            /** LoadScratchInformationResponse currentSheet */
            currentSheet: number;

            /** LoadScratchInformationResponse numOfScratched */
            numOfScratched: number;

            /** LoadScratchInformationResponse ownedUserItems */
            ownedUserItems?: (wm5.protobuf.IUserItem[]|null);

            /** LoadScratchInformationResponse banacoinsRemain */
            banacoinsRemain?: (number|null);
        }

        /** Represents a LoadScratchInformationResponse. */
        class LoadScratchInformationResponse implements ILoadScratchInformationResponse {

            /**
             * Constructs a new LoadScratchInformationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ILoadScratchInformationResponse);

            /** LoadScratchInformationResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** LoadScratchInformationResponse scratchSheets. */
            public scratchSheets: wm5.protobuf.IScratchSheet[];

            /** LoadScratchInformationResponse currentSheet. */
            public currentSheet: number;

            /** LoadScratchInformationResponse numOfScratched. */
            public numOfScratched: number;

            /** LoadScratchInformationResponse ownedUserItems. */
            public ownedUserItems: wm5.protobuf.IUserItem[];

            /** LoadScratchInformationResponse banacoinsRemain. */
            public banacoinsRemain: number;

            /**
             * Creates a new LoadScratchInformationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoadScratchInformationResponse instance
             */
            public static create(properties?: wm5.protobuf.ILoadScratchInformationResponse): wm5.protobuf.LoadScratchInformationResponse;

            /**
             * Encodes the specified LoadScratchInformationResponse message. Does not implicitly {@link wm5.protobuf.LoadScratchInformationResponse.verify|verify} messages.
             * @param message LoadScratchInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ILoadScratchInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoadScratchInformationResponse message, length delimited. Does not implicitly {@link wm5.protobuf.LoadScratchInformationResponse.verify|verify} messages.
             * @param message LoadScratchInformationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ILoadScratchInformationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoadScratchInformationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoadScratchInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.LoadScratchInformationResponse;

            /**
             * Decodes a LoadScratchInformationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoadScratchInformationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.LoadScratchInformationResponse;

            /**
             * Verifies a LoadScratchInformationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoadScratchInformationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoadScratchInformationResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.LoadScratchInformationResponse;

            /**
             * Creates a plain object from a LoadScratchInformationResponse message. Also converts values to other types if specified.
             * @param message LoadScratchInformationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.LoadScratchInformationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoadScratchInformationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoadScratchInformationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScratchSheetRequest. */
        interface ISaveScratchSheetRequest {

            /** SaveScratchSheetRequest timestamp */
            timestamp: number;

            /** SaveScratchSheetRequest targetSheet */
            targetSheet: number;

            /** SaveScratchSheetRequest targetSquare */
            targetSquare: number;

            /** SaveScratchSheetRequest userId */
            userId?: (number|null);

            /** SaveScratchSheetRequest sessionId */
            sessionId?: (string|null);

            /** SaveScratchSheetRequest personId */
            personId?: (string|null);

            /** SaveScratchSheetRequest price */
            price?: (number|null);
        }

        /** Represents a SaveScratchSheetRequest. */
        class SaveScratchSheetRequest implements ISaveScratchSheetRequest {

            /**
             * Constructs a new SaveScratchSheetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveScratchSheetRequest);

            /** SaveScratchSheetRequest timestamp. */
            public timestamp: number;

            /** SaveScratchSheetRequest targetSheet. */
            public targetSheet: number;

            /** SaveScratchSheetRequest targetSquare. */
            public targetSquare: number;

            /** SaveScratchSheetRequest userId. */
            public userId: number;

            /** SaveScratchSheetRequest sessionId. */
            public sessionId: string;

            /** SaveScratchSheetRequest personId. */
            public personId: string;

            /** SaveScratchSheetRequest price. */
            public price: number;

            /**
             * Creates a new SaveScratchSheetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScratchSheetRequest instance
             */
            public static create(properties?: wm5.protobuf.ISaveScratchSheetRequest): wm5.protobuf.SaveScratchSheetRequest;

            /**
             * Encodes the specified SaveScratchSheetRequest message. Does not implicitly {@link wm5.protobuf.SaveScratchSheetRequest.verify|verify} messages.
             * @param message SaveScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScratchSheetRequest message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScratchSheetRequest.verify|verify} messages.
             * @param message SaveScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScratchSheetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScratchSheetRequest;

            /**
             * Decodes a SaveScratchSheetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScratchSheetRequest;

            /**
             * Verifies a SaveScratchSheetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScratchSheetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScratchSheetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScratchSheetRequest;

            /**
             * Creates a plain object from a SaveScratchSheetRequest message. Also converts values to other types if specified.
             * @param message SaveScratchSheetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveScratchSheetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScratchSheetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScratchSheetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SaveScratchSheetResponse. */
        interface ISaveScratchSheetResponse {

            /** SaveScratchSheetResponse error */
            error: wm5.protobuf.ErrorCode;

            /** SaveScratchSheetResponse scratchSheets */
            scratchSheets?: (wm5.protobuf.IScratchSheet[]|null);

            /** SaveScratchSheetResponse currentSheet */
            currentSheet: number;

            /** SaveScratchSheetResponse numOfScratched */
            numOfScratched: number;

            /** SaveScratchSheetResponse earnedItem */
            earnedItem?: (wm5.protobuf.IUserItem|null);

            /** SaveScratchSheetResponse banacoinError */
            banacoinError?: (wm5.protobuf.BanacoinErrorCode|null);

            /** SaveScratchSheetResponse sessionId */
            sessionId?: (string|null);

            /** SaveScratchSheetResponse contactNumber */
            contactNumber?: (string|null);

            /** SaveScratchSheetResponse banacoinsRemain */
            banacoinsRemain?: (number|null);
        }

        /** Represents a SaveScratchSheetResponse. */
        class SaveScratchSheetResponse implements ISaveScratchSheetResponse {

            /**
             * Constructs a new SaveScratchSheetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISaveScratchSheetResponse);

            /** SaveScratchSheetResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** SaveScratchSheetResponse scratchSheets. */
            public scratchSheets: wm5.protobuf.IScratchSheet[];

            /** SaveScratchSheetResponse currentSheet. */
            public currentSheet: number;

            /** SaveScratchSheetResponse numOfScratched. */
            public numOfScratched: number;

            /** SaveScratchSheetResponse earnedItem. */
            public earnedItem?: (wm5.protobuf.IUserItem|null);

            /** SaveScratchSheetResponse banacoinError. */
            public banacoinError: wm5.protobuf.BanacoinErrorCode;

            /** SaveScratchSheetResponse sessionId. */
            public sessionId: string;

            /** SaveScratchSheetResponse contactNumber. */
            public contactNumber: string;

            /** SaveScratchSheetResponse banacoinsRemain. */
            public banacoinsRemain: number;

            /**
             * Creates a new SaveScratchSheetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SaveScratchSheetResponse instance
             */
            public static create(properties?: wm5.protobuf.ISaveScratchSheetResponse): wm5.protobuf.SaveScratchSheetResponse;

            /**
             * Encodes the specified SaveScratchSheetResponse message. Does not implicitly {@link wm5.protobuf.SaveScratchSheetResponse.verify|verify} messages.
             * @param message SaveScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISaveScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SaveScratchSheetResponse message, length delimited. Does not implicitly {@link wm5.protobuf.SaveScratchSheetResponse.verify|verify} messages.
             * @param message SaveScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISaveScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SaveScratchSheetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SaveScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SaveScratchSheetResponse;

            /**
             * Decodes a SaveScratchSheetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SaveScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SaveScratchSheetResponse;

            /**
             * Verifies a SaveScratchSheetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SaveScratchSheetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SaveScratchSheetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SaveScratchSheetResponse;

            /**
             * Creates a plain object from a SaveScratchSheetResponse message. Also converts values to other types if specified.
             * @param message SaveScratchSheetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SaveScratchSheetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SaveScratchSheetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SaveScratchSheetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TurnScratchSheetRequest. */
        interface ITurnScratchSheetRequest {

            /** TurnScratchSheetRequest userId */
            userId: number;

            /** TurnScratchSheetRequest targetSheet */
            targetSheet: number;
        }

        /** Represents a TurnScratchSheetRequest. */
        class TurnScratchSheetRequest implements ITurnScratchSheetRequest {

            /**
             * Constructs a new TurnScratchSheetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITurnScratchSheetRequest);

            /** TurnScratchSheetRequest userId. */
            public userId: number;

            /** TurnScratchSheetRequest targetSheet. */
            public targetSheet: number;

            /**
             * Creates a new TurnScratchSheetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TurnScratchSheetRequest instance
             */
            public static create(properties?: wm5.protobuf.ITurnScratchSheetRequest): wm5.protobuf.TurnScratchSheetRequest;

            /**
             * Encodes the specified TurnScratchSheetRequest message. Does not implicitly {@link wm5.protobuf.TurnScratchSheetRequest.verify|verify} messages.
             * @param message TurnScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITurnScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TurnScratchSheetRequest message, length delimited. Does not implicitly {@link wm5.protobuf.TurnScratchSheetRequest.verify|verify} messages.
             * @param message TurnScratchSheetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITurnScratchSheetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TurnScratchSheetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TurnScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.TurnScratchSheetRequest;

            /**
             * Decodes a TurnScratchSheetRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TurnScratchSheetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.TurnScratchSheetRequest;

            /**
             * Verifies a TurnScratchSheetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TurnScratchSheetRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TurnScratchSheetRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.TurnScratchSheetRequest;

            /**
             * Creates a plain object from a TurnScratchSheetRequest message. Also converts values to other types if specified.
             * @param message TurnScratchSheetRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.TurnScratchSheetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TurnScratchSheetRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TurnScratchSheetRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TurnScratchSheetResponse. */
        interface ITurnScratchSheetResponse {

            /** TurnScratchSheetResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a TurnScratchSheetResponse. */
        class TurnScratchSheetResponse implements ITurnScratchSheetResponse {

            /**
             * Constructs a new TurnScratchSheetResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITurnScratchSheetResponse);

            /** TurnScratchSheetResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new TurnScratchSheetResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TurnScratchSheetResponse instance
             */
            public static create(properties?: wm5.protobuf.ITurnScratchSheetResponse): wm5.protobuf.TurnScratchSheetResponse;

            /**
             * Encodes the specified TurnScratchSheetResponse message. Does not implicitly {@link wm5.protobuf.TurnScratchSheetResponse.verify|verify} messages.
             * @param message TurnScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITurnScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TurnScratchSheetResponse message, length delimited. Does not implicitly {@link wm5.protobuf.TurnScratchSheetResponse.verify|verify} messages.
             * @param message TurnScratchSheetResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITurnScratchSheetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TurnScratchSheetResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TurnScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.TurnScratchSheetResponse;

            /**
             * Decodes a TurnScratchSheetResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TurnScratchSheetResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.TurnScratchSheetResponse;

            /**
             * Verifies a TurnScratchSheetResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TurnScratchSheetResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TurnScratchSheetResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.TurnScratchSheetResponse;

            /**
             * Creates a plain object from a TurnScratchSheetResponse message. Also converts values to other types if specified.
             * @param message TurnScratchSheetResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.TurnScratchSheetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TurnScratchSheetResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TurnScratchSheetResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckItemReceivableCarsRequest. */
        interface ICheckItemReceivableCarsRequest {

            /** CheckItemReceivableCarsRequest userId */
            userId: number;

            /** CheckItemReceivableCarsRequest itemsToBeEarned */
            itemsToBeEarned?: (wm5.protobuf.IUserItem[]|null);
        }

        /** Represents a CheckItemReceivableCarsRequest. */
        class CheckItemReceivableCarsRequest implements ICheckItemReceivableCarsRequest {

            /**
             * Constructs a new CheckItemReceivableCarsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICheckItemReceivableCarsRequest);

            /** CheckItemReceivableCarsRequest userId. */
            public userId: number;

            /** CheckItemReceivableCarsRequest itemsToBeEarned. */
            public itemsToBeEarned: wm5.protobuf.IUserItem[];

            /**
             * Creates a new CheckItemReceivableCarsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckItemReceivableCarsRequest instance
             */
            public static create(properties?: wm5.protobuf.ICheckItemReceivableCarsRequest): wm5.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Encodes the specified CheckItemReceivableCarsRequest message. Does not implicitly {@link wm5.protobuf.CheckItemReceivableCarsRequest.verify|verify} messages.
             * @param message CheckItemReceivableCarsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICheckItemReceivableCarsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckItemReceivableCarsRequest message, length delimited. Does not implicitly {@link wm5.protobuf.CheckItemReceivableCarsRequest.verify|verify} messages.
             * @param message CheckItemReceivableCarsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICheckItemReceivableCarsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckItemReceivableCarsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckItemReceivableCarsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Decodes a CheckItemReceivableCarsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckItemReceivableCarsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Verifies a CheckItemReceivableCarsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckItemReceivableCarsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckItemReceivableCarsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CheckItemReceivableCarsRequest;

            /**
             * Creates a plain object from a CheckItemReceivableCarsRequest message. Also converts values to other types if specified.
             * @param message CheckItemReceivableCarsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CheckItemReceivableCarsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckItemReceivableCarsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckItemReceivableCarsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CheckItemReceivableCarsResponse. */
        interface ICheckItemReceivableCarsResponse {

            /** CheckItemReceivableCarsResponse error */
            error: wm5.protobuf.ErrorCode;

            /** CheckItemReceivableCarsResponse carIds */
            carIds?: (number[]|null);
        }

        /** Represents a CheckItemReceivableCarsResponse. */
        class CheckItemReceivableCarsResponse implements ICheckItemReceivableCarsResponse {

            /**
             * Constructs a new CheckItemReceivableCarsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICheckItemReceivableCarsResponse);

            /** CheckItemReceivableCarsResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** CheckItemReceivableCarsResponse carIds. */
            public carIds: number[];

            /**
             * Creates a new CheckItemReceivableCarsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CheckItemReceivableCarsResponse instance
             */
            public static create(properties?: wm5.protobuf.ICheckItemReceivableCarsResponse): wm5.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Encodes the specified CheckItemReceivableCarsResponse message. Does not implicitly {@link wm5.protobuf.CheckItemReceivableCarsResponse.verify|verify} messages.
             * @param message CheckItemReceivableCarsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICheckItemReceivableCarsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CheckItemReceivableCarsResponse message, length delimited. Does not implicitly {@link wm5.protobuf.CheckItemReceivableCarsResponse.verify|verify} messages.
             * @param message CheckItemReceivableCarsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICheckItemReceivableCarsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CheckItemReceivableCarsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CheckItemReceivableCarsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Decodes a CheckItemReceivableCarsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CheckItemReceivableCarsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Verifies a CheckItemReceivableCarsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CheckItemReceivableCarsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CheckItemReceivableCarsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CheckItemReceivableCarsResponse;

            /**
             * Creates a plain object from a CheckItemReceivableCarsResponse message. Also converts values to other types if specified.
             * @param message CheckItemReceivableCarsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CheckItemReceivableCarsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CheckItemReceivableCarsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CheckItemReceivableCarsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiveUserItemsRequest. */
        interface IReceiveUserItemsRequest {

            /** ReceiveUserItemsRequest carId */
            carId: number;

            /** ReceiveUserItemsRequest targetItemIds */
            targetItemIds?: (number[]|null);
        }

        /** Represents a ReceiveUserItemsRequest. */
        class ReceiveUserItemsRequest implements IReceiveUserItemsRequest {

            /**
             * Constructs a new ReceiveUserItemsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IReceiveUserItemsRequest);

            /** ReceiveUserItemsRequest carId. */
            public carId: number;

            /** ReceiveUserItemsRequest targetItemIds. */
            public targetItemIds: number[];

            /**
             * Creates a new ReceiveUserItemsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveUserItemsRequest instance
             */
            public static create(properties?: wm5.protobuf.IReceiveUserItemsRequest): wm5.protobuf.ReceiveUserItemsRequest;

            /**
             * Encodes the specified ReceiveUserItemsRequest message. Does not implicitly {@link wm5.protobuf.ReceiveUserItemsRequest.verify|verify} messages.
             * @param message ReceiveUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IReceiveUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveUserItemsRequest message, length delimited. Does not implicitly {@link wm5.protobuf.ReceiveUserItemsRequest.verify|verify} messages.
             * @param message ReceiveUserItemsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IReceiveUserItemsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveUserItemsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ReceiveUserItemsRequest;

            /**
             * Decodes a ReceiveUserItemsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveUserItemsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ReceiveUserItemsRequest;

            /**
             * Verifies a ReceiveUserItemsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveUserItemsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveUserItemsRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ReceiveUserItemsRequest;

            /**
             * Creates a plain object from a ReceiveUserItemsRequest message. Also converts values to other types if specified.
             * @param message ReceiveUserItemsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ReceiveUserItemsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveUserItemsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveUserItemsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ReceiveUserItemsResponse. */
        interface IReceiveUserItemsResponse {

            /** ReceiveUserItemsResponse error */
            error: wm5.protobuf.ErrorCode;
        }

        /** Represents a ReceiveUserItemsResponse. */
        class ReceiveUserItemsResponse implements IReceiveUserItemsResponse {

            /**
             * Constructs a new ReceiveUserItemsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IReceiveUserItemsResponse);

            /** ReceiveUserItemsResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /**
             * Creates a new ReceiveUserItemsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReceiveUserItemsResponse instance
             */
            public static create(properties?: wm5.protobuf.IReceiveUserItemsResponse): wm5.protobuf.ReceiveUserItemsResponse;

            /**
             * Encodes the specified ReceiveUserItemsResponse message. Does not implicitly {@link wm5.protobuf.ReceiveUserItemsResponse.verify|verify} messages.
             * @param message ReceiveUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IReceiveUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReceiveUserItemsResponse message, length delimited. Does not implicitly {@link wm5.protobuf.ReceiveUserItemsResponse.verify|verify} messages.
             * @param message ReceiveUserItemsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IReceiveUserItemsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReceiveUserItemsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReceiveUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ReceiveUserItemsResponse;

            /**
             * Decodes a ReceiveUserItemsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReceiveUserItemsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ReceiveUserItemsResponse;

            /**
             * Verifies a ReceiveUserItemsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReceiveUserItemsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReceiveUserItemsResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ReceiveUserItemsResponse;

            /**
             * Creates a plain object from a ReceiveUserItemsResponse message. Also converts values to other types if specified.
             * @param message ReceiveUserItemsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ReceiveUserItemsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReceiveUserItemsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ReceiveUserItemsResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateEventModeSerialRequest. */
        interface IUpdateEventModeSerialRequest {

            /** UpdateEventModeSerialRequest eventModeSerial */
            eventModeSerial?: (string|null);
        }

        /** Represents an UpdateEventModeSerialRequest. */
        class UpdateEventModeSerialRequest implements IUpdateEventModeSerialRequest {

            /**
             * Constructs a new UpdateEventModeSerialRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateEventModeSerialRequest);

            /** UpdateEventModeSerialRequest eventModeSerial. */
            public eventModeSerial: string;

            /**
             * Creates a new UpdateEventModeSerialRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEventModeSerialRequest instance
             */
            public static create(properties?: wm5.protobuf.IUpdateEventModeSerialRequest): wm5.protobuf.UpdateEventModeSerialRequest;

            /**
             * Encodes the specified UpdateEventModeSerialRequest message. Does not implicitly {@link wm5.protobuf.UpdateEventModeSerialRequest.verify|verify} messages.
             * @param message UpdateEventModeSerialRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateEventModeSerialRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEventModeSerialRequest message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateEventModeSerialRequest.verify|verify} messages.
             * @param message UpdateEventModeSerialRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateEventModeSerialRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEventModeSerialRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEventModeSerialRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateEventModeSerialRequest;

            /**
             * Decodes an UpdateEventModeSerialRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEventModeSerialRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateEventModeSerialRequest;

            /**
             * Verifies an UpdateEventModeSerialRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEventModeSerialRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEventModeSerialRequest
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateEventModeSerialRequest;

            /**
             * Creates a plain object from an UpdateEventModeSerialRequest message. Also converts values to other types if specified.
             * @param message UpdateEventModeSerialRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateEventModeSerialRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEventModeSerialRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateEventModeSerialRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UpdateEventModeSerialResponse. */
        interface IUpdateEventModeSerialResponse {

            /** UpdateEventModeSerialResponse error */
            error: wm5.protobuf.ErrorCode;

            /** UpdateEventModeSerialResponse serialError */
            serialError: wm5.protobuf.EventModeSerialErrorCode;

            /** UpdateEventModeSerialResponse eventModeSerial */
            eventModeSerial?: (string|null);

            /** UpdateEventModeSerialResponse startAt */
            startAt?: (number|null);

            /** UpdateEventModeSerialResponse endAt */
            endAt?: (number|null);
        }

        /** Represents an UpdateEventModeSerialResponse. */
        class UpdateEventModeSerialResponse implements IUpdateEventModeSerialResponse {

            /**
             * Constructs a new UpdateEventModeSerialResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUpdateEventModeSerialResponse);

            /** UpdateEventModeSerialResponse error. */
            public error: wm5.protobuf.ErrorCode;

            /** UpdateEventModeSerialResponse serialError. */
            public serialError: wm5.protobuf.EventModeSerialErrorCode;

            /** UpdateEventModeSerialResponse eventModeSerial. */
            public eventModeSerial: string;

            /** UpdateEventModeSerialResponse startAt. */
            public startAt: number;

            /** UpdateEventModeSerialResponse endAt. */
            public endAt: number;

            /**
             * Creates a new UpdateEventModeSerialResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UpdateEventModeSerialResponse instance
             */
            public static create(properties?: wm5.protobuf.IUpdateEventModeSerialResponse): wm5.protobuf.UpdateEventModeSerialResponse;

            /**
             * Encodes the specified UpdateEventModeSerialResponse message. Does not implicitly {@link wm5.protobuf.UpdateEventModeSerialResponse.verify|verify} messages.
             * @param message UpdateEventModeSerialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUpdateEventModeSerialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UpdateEventModeSerialResponse message, length delimited. Does not implicitly {@link wm5.protobuf.UpdateEventModeSerialResponse.verify|verify} messages.
             * @param message UpdateEventModeSerialResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUpdateEventModeSerialResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UpdateEventModeSerialResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UpdateEventModeSerialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UpdateEventModeSerialResponse;

            /**
             * Decodes an UpdateEventModeSerialResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UpdateEventModeSerialResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UpdateEventModeSerialResponse;

            /**
             * Verifies an UpdateEventModeSerialResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UpdateEventModeSerialResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UpdateEventModeSerialResponse
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UpdateEventModeSerialResponse;

            /**
             * Creates a plain object from an UpdateEventModeSerialResponse message. Also converts values to other types if specified.
             * @param message UpdateEventModeSerialResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UpdateEventModeSerialResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UpdateEventModeSerialResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UpdateEventModeSerialResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Car. */
        interface ICar {

            /** Car carId */
            carId?: (number|null);

            /** Car userId */
            userId?: (number|null);

            /** Car regionId */
            regionId?: (number|null);

            /** Car name */
            name?: (string|null);

            /** Car manufacturer */
            manufacturer?: (number|null);

            /** Car model */
            model?: (number|null);

            /** Car visualModel */
            visualModel?: (number|null);

            /** Car defaultColor */
            defaultColor?: (number|null);

            /** Car customColor */
            customColor: number;

            /** Car wheel */
            wheel: number;

            /** Car wheelColor */
            wheelColor: number;

            /** Car aero */
            aero: number;

            /** Car bonnet */
            bonnet: number;

            /** Car wing */
            wing: number;

            /** Car gtWing */
            gtWing?: (wm5.protobuf.IGTWing|null);

            /** Car mirror */
            mirror: number;

            /** Car sticker */
            sticker: number;

            /** Car stickerColor */
            stickerColor: number;

            /** Car miniStickers */
            miniStickers?: (wm5.protobuf.IMiniSticker[]|null);

            /** Car sideSticker */
            sideSticker: number;

            /** Car sideStickerColor */
            sideStickerColor: number;

            /** Car roofSticker */
            roofSticker: number;

            /** Car roofStickerColor */
            roofStickerColor: number;

            /** Car neon */
            neon: number;

            /** Car trunk */
            trunk: number;

            /** Car plate */
            plate: number;

            /** Car plateColor */
            plateColor: number;

            /** Car plateNumber */
            plateNumber: number;

            /** Car specialSticker */
            specialSticker: number;

            /** Car specialStickerColor */
            specialStickerColor: number;

            /** Car tunePower */
            tunePower: number;

            /** Car tuneHandling */
            tuneHandling: number;

            /** Car title */
            title: string;

            /** Car level */
            level: number;

            /** Car teamSticker */
            teamSticker?: (boolean|null);

            /** Car teamId */
            teamId?: (number|null);

            /** Car teamName */
            teamName?: (string|null);

            /** Car teamStickerFont */
            teamStickerFont?: (number|null);

            /** Car teamDecoration */
            teamDecoration?: (number|null);

            /** Car teamDecorationColor */
            teamDecorationColor?: (number|null);

            /** Car rivalMarker */
            rivalMarker?: (number|null);

            /** Car rivalMarkerColor */
            rivalMarkerColor?: (number|null);

            /** Car lastPlayedAt */
            lastPlayedAt?: (number|null);

            /** Car lastPlayedPlace */
            lastPlayedPlace?: (wm5.protobuf.IPlace|null);

            /** Car aura */
            aura?: (number|null);

            /** Car auraMotif */
            auraMotif?: (number|null);

            /** Car ghostLevel */
            ghostLevel?: (number|null);

            /** Car country */
            country?: (string|null);

            /** Car searchCode */
            searchCode?: (string|null);
        }

        /** Represents a Car. */
        class Car implements ICar {

            /**
             * Constructs a new Car.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICar);

            /** Car carId. */
            public carId: number;

            /** Car userId. */
            public userId: number;

            /** Car regionId. */
            public regionId: number;

            /** Car name. */
            public name: string;

            /** Car manufacturer. */
            public manufacturer: number;

            /** Car model. */
            public model: number;

            /** Car visualModel. */
            public visualModel: number;

            /** Car defaultColor. */
            public defaultColor: number;

            /** Car customColor. */
            public customColor: number;

            /** Car wheel. */
            public wheel: number;

            /** Car wheelColor. */
            public wheelColor: number;

            /** Car aero. */
            public aero: number;

            /** Car bonnet. */
            public bonnet: number;

            /** Car wing. */
            public wing: number;

            /** Car gtWing. */
            public gtWing?: (wm5.protobuf.IGTWing|null);

            /** Car mirror. */
            public mirror: number;

            /** Car sticker. */
            public sticker: number;

            /** Car stickerColor. */
            public stickerColor: number;

            /** Car miniStickers. */
            public miniStickers: wm5.protobuf.IMiniSticker[];

            /** Car sideSticker. */
            public sideSticker: number;

            /** Car sideStickerColor. */
            public sideStickerColor: number;

            /** Car roofSticker. */
            public roofSticker: number;

            /** Car roofStickerColor. */
            public roofStickerColor: number;

            /** Car neon. */
            public neon: number;

            /** Car trunk. */
            public trunk: number;

            /** Car plate. */
            public plate: number;

            /** Car plateColor. */
            public plateColor: number;

            /** Car plateNumber. */
            public plateNumber: number;

            /** Car specialSticker. */
            public specialSticker: number;

            /** Car specialStickerColor. */
            public specialStickerColor: number;

            /** Car tunePower. */
            public tunePower: number;

            /** Car tuneHandling. */
            public tuneHandling: number;

            /** Car title. */
            public title: string;

            /** Car level. */
            public level: number;

            /** Car teamSticker. */
            public teamSticker: boolean;

            /** Car teamId. */
            public teamId: number;

            /** Car teamName. */
            public teamName: string;

            /** Car teamStickerFont. */
            public teamStickerFont: number;

            /** Car teamDecoration. */
            public teamDecoration: number;

            /** Car teamDecorationColor. */
            public teamDecorationColor: number;

            /** Car rivalMarker. */
            public rivalMarker: number;

            /** Car rivalMarkerColor. */
            public rivalMarkerColor: number;

            /** Car lastPlayedAt. */
            public lastPlayedAt: number;

            /** Car lastPlayedPlace. */
            public lastPlayedPlace?: (wm5.protobuf.IPlace|null);

            /** Car aura. */
            public aura: number;

            /** Car auraMotif. */
            public auraMotif: number;

            /** Car ghostLevel. */
            public ghostLevel: number;

            /** Car country. */
            public country: string;

            /** Car searchCode. */
            public searchCode: string;

            /**
             * Creates a new Car instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Car instance
             */
            public static create(properties?: wm5.protobuf.ICar): wm5.protobuf.Car;

            /**
             * Encodes the specified Car message. Does not implicitly {@link wm5.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Car message, length delimited. Does not implicitly {@link wm5.protobuf.Car.verify|verify} messages.
             * @param message Car message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Car message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.Car;

            /**
             * Decodes a Car message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Car
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.Car;

            /**
             * Verifies a Car message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Car message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Car
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.Car;

            /**
             * Creates a plain object from a Car message. Also converts values to other types if specified.
             * @param message Car
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.Car, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Car to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Car
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSetting. */
        interface ICarSetting {

            /** CarSetting carId */
            carId?: (number|null);

            /** CarSetting view */
            view: boolean;

            /** CarSetting transmission */
            transmission: boolean;

            /** CarSetting retire */
            retire: boolean;

            /** CarSetting meter */
            meter: number;

            /** CarSetting navigationMap */
            navigationMap: boolean;

            /** CarSetting volume */
            volume: number;

            /** CarSetting bgm */
            bgm: number;

            /** CarSetting nameplate */
            nameplate: number;

            /** CarSetting nameplateColor */
            nameplateColor: number;

            /** CarSetting nameplateFrame */
            nameplateFrame?: (number|null);

            /** CarSetting nameplateFrameColor */
            nameplateFrameColor?: (number|null);

            /** CarSetting terminalBackground */
            terminalBackground: number;
        }

        /** Represents a CarSetting. */
        class CarSetting implements ICarSetting {

            /**
             * Constructs a new CarSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICarSetting);

            /** CarSetting carId. */
            public carId: number;

            /** CarSetting view. */
            public view: boolean;

            /** CarSetting transmission. */
            public transmission: boolean;

            /** CarSetting retire. */
            public retire: boolean;

            /** CarSetting meter. */
            public meter: number;

            /** CarSetting navigationMap. */
            public navigationMap: boolean;

            /** CarSetting volume. */
            public volume: number;

            /** CarSetting bgm. */
            public bgm: number;

            /** CarSetting nameplate. */
            public nameplate: number;

            /** CarSetting nameplateColor. */
            public nameplateColor: number;

            /** CarSetting nameplateFrame. */
            public nameplateFrame: number;

            /** CarSetting nameplateFrameColor. */
            public nameplateFrameColor: number;

            /** CarSetting terminalBackground. */
            public terminalBackground: number;

            /**
             * Creates a new CarSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSetting instance
             */
            public static create(properties?: wm5.protobuf.ICarSetting): wm5.protobuf.CarSetting;

            /**
             * Encodes the specified CarSetting message. Does not implicitly {@link wm5.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSetting message, length delimited. Does not implicitly {@link wm5.protobuf.CarSetting.verify|verify} messages.
             * @param message CarSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICarSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CarSetting;

            /**
             * Decodes a CarSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CarSetting;

            /**
             * Verifies a CarSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSetting
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CarSetting;

            /**
             * Creates a plain object from a CarSetting message. Also converts values to other types if specified.
             * @param message CarSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CarSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GTWing. */
        interface IGTWing {

            /** GTWing pillar */
            pillar: number;

            /** GTWing pillarMaterial */
            pillarMaterial: number;

            /** GTWing mainWing */
            mainWing: number;

            /** GTWing mainWingColor */
            mainWingColor: number;

            /** GTWing wingTip */
            wingTip: number;

            /** GTWing material */
            material: number;
        }

        /** Represents a GTWing. */
        class GTWing implements IGTWing {

            /**
             * Constructs a new GTWing.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGTWing);

            /** GTWing pillar. */
            public pillar: number;

            /** GTWing pillarMaterial. */
            public pillarMaterial: number;

            /** GTWing mainWing. */
            public mainWing: number;

            /** GTWing mainWingColor. */
            public mainWingColor: number;

            /** GTWing wingTip. */
            public wingTip: number;

            /** GTWing material. */
            public material: number;

            /**
             * Creates a new GTWing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GTWing instance
             */
            public static create(properties?: wm5.protobuf.IGTWing): wm5.protobuf.GTWing;

            /**
             * Encodes the specified GTWing message. Does not implicitly {@link wm5.protobuf.GTWing.verify|verify} messages.
             * @param message GTWing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGTWing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GTWing message, length delimited. Does not implicitly {@link wm5.protobuf.GTWing.verify|verify} messages.
             * @param message GTWing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGTWing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GTWing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GTWing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GTWing;

            /**
             * Decodes a GTWing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GTWing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GTWing;

            /**
             * Verifies a GTWing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GTWing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GTWing
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GTWing;

            /**
             * Creates a plain object from a GTWing message. Also converts values to other types if specified.
             * @param message GTWing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GTWing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GTWing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GTWing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MiniSticker. */
        interface IMiniSticker {

            /** MiniSticker miniSticker */
            miniSticker: number;

            /** MiniSticker miniStickerColor */
            miniStickerColor: number;
        }

        /** Represents a MiniSticker. */
        class MiniSticker implements IMiniSticker {

            /**
             * Constructs a new MiniSticker.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IMiniSticker);

            /** MiniSticker miniSticker. */
            public miniSticker: number;

            /** MiniSticker miniStickerColor. */
            public miniStickerColor: number;

            /**
             * Creates a new MiniSticker instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MiniSticker instance
             */
            public static create(properties?: wm5.protobuf.IMiniSticker): wm5.protobuf.MiniSticker;

            /**
             * Encodes the specified MiniSticker message. Does not implicitly {@link wm5.protobuf.MiniSticker.verify|verify} messages.
             * @param message MiniSticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IMiniSticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MiniSticker message, length delimited. Does not implicitly {@link wm5.protobuf.MiniSticker.verify|verify} messages.
             * @param message MiniSticker message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IMiniSticker, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MiniSticker message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MiniSticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.MiniSticker;

            /**
             * Decodes a MiniSticker message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MiniSticker
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.MiniSticker;

            /**
             * Verifies a MiniSticker message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MiniSticker message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MiniSticker
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.MiniSticker;

            /**
             * Creates a plain object from a MiniSticker message. Also converts values to other types if specified.
             * @param message MiniSticker
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.MiniSticker, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MiniSticker to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MiniSticker
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarItem. */
        interface ICarItem {

            /** CarItem category */
            category: wm5.protobuf.ItemCategory;

            /** CarItem itemId */
            itemId: number;

            /** CarItem amount */
            amount?: (number|null);
        }

        /** Represents a CarItem. */
        class CarItem implements ICarItem {

            /**
             * Constructs a new CarItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICarItem);

            /** CarItem category. */
            public category: wm5.protobuf.ItemCategory;

            /** CarItem itemId. */
            public itemId: number;

            /** CarItem amount. */
            public amount: number;

            /**
             * Creates a new CarItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarItem instance
             */
            public static create(properties?: wm5.protobuf.ICarItem): wm5.protobuf.CarItem;

            /**
             * Encodes the specified CarItem message. Does not implicitly {@link wm5.protobuf.CarItem.verify|verify} messages.
             * @param message CarItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICarItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarItem message, length delimited. Does not implicitly {@link wm5.protobuf.CarItem.verify|verify} messages.
             * @param message CarItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICarItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CarItem;

            /**
             * Decodes a CarItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CarItem;

            /**
             * Verifies a CarItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarItem
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CarItem;

            /**
             * Creates a plain object from a CarItem message. Also converts values to other types if specified.
             * @param message CarItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CarItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FriendCar. */
        interface IFriendCar {

            /** FriendCar car */
            car: wm5.protobuf.ICar;

            /** FriendCar friendshipLevel */
            friendshipLevel?: (number|null);

            /** FriendCar nonhuman */
            nonhuman: boolean;
        }

        /** Represents a FriendCar. */
        class FriendCar implements IFriendCar {

            /**
             * Constructs a new FriendCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IFriendCar);

            /** FriendCar car. */
            public car: wm5.protobuf.ICar;

            /** FriendCar friendshipLevel. */
            public friendshipLevel: number;

            /** FriendCar nonhuman. */
            public nonhuman: boolean;

            /**
             * Creates a new FriendCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FriendCar instance
             */
            public static create(properties?: wm5.protobuf.IFriendCar): wm5.protobuf.FriendCar;

            /**
             * Encodes the specified FriendCar message. Does not implicitly {@link wm5.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FriendCar message, length delimited. Does not implicitly {@link wm5.protobuf.FriendCar.verify|verify} messages.
             * @param message FriendCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IFriendCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FriendCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.FriendCar;

            /**
             * Decodes a FriendCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FriendCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.FriendCar;

            /**
             * Verifies a FriendCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FriendCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FriendCar
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.FriendCar;

            /**
             * Creates a plain object from a FriendCar message. Also converts values to other types if specified.
             * @param message FriendCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.FriendCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FriendCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FriendCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ChallengerCar. */
        interface IChallengerCar {

            /** ChallengerCar ghostCar */
            ghostCar: wm5.protobuf.IGhostCar;

            /** ChallengerCar immediate */
            immediate: boolean;

            /** ChallengerCar stamp */
            stamp: number;

            /** ChallengerCar result */
            result: number;
        }

        /** Represents a ChallengerCar. */
        class ChallengerCar implements IChallengerCar {

            /**
             * Constructs a new ChallengerCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IChallengerCar);

            /** ChallengerCar ghostCar. */
            public ghostCar: wm5.protobuf.IGhostCar;

            /** ChallengerCar immediate. */
            public immediate: boolean;

            /** ChallengerCar stamp. */
            public stamp: number;

            /** ChallengerCar result. */
            public result: number;

            /**
             * Creates a new ChallengerCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChallengerCar instance
             */
            public static create(properties?: wm5.protobuf.IChallengerCar): wm5.protobuf.ChallengerCar;

            /**
             * Encodes the specified ChallengerCar message. Does not implicitly {@link wm5.protobuf.ChallengerCar.verify|verify} messages.
             * @param message ChallengerCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IChallengerCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChallengerCar message, length delimited. Does not implicitly {@link wm5.protobuf.ChallengerCar.verify|verify} messages.
             * @param message ChallengerCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IChallengerCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChallengerCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChallengerCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ChallengerCar;

            /**
             * Decodes a ChallengerCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChallengerCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ChallengerCar;

            /**
             * Verifies a ChallengerCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChallengerCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChallengerCar
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ChallengerCar;

            /**
             * Creates a plain object from a ChallengerCar message. Also converts values to other types if specified.
             * @param message ChallengerCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ChallengerCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChallengerCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChallengerCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StampTargetCar. */
        interface IStampTargetCar {

            /** StampTargetCar car */
            car: wm5.protobuf.ICar;

            /** StampTargetCar returnCount */
            returnCount: number;

            /** StampTargetCar locked */
            locked: boolean;

            /** StampTargetCar recommended */
            recommended: boolean;
        }

        /** Represents a StampTargetCar. */
        class StampTargetCar implements IStampTargetCar {

            /**
             * Constructs a new StampTargetCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IStampTargetCar);

            /** StampTargetCar car. */
            public car: wm5.protobuf.ICar;

            /** StampTargetCar returnCount. */
            public returnCount: number;

            /** StampTargetCar locked. */
            public locked: boolean;

            /** StampTargetCar recommended. */
            public recommended: boolean;

            /**
             * Creates a new StampTargetCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StampTargetCar instance
             */
            public static create(properties?: wm5.protobuf.IStampTargetCar): wm5.protobuf.StampTargetCar;

            /**
             * Encodes the specified StampTargetCar message. Does not implicitly {@link wm5.protobuf.StampTargetCar.verify|verify} messages.
             * @param message StampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StampTargetCar message, length delimited. Does not implicitly {@link wm5.protobuf.StampTargetCar.verify|verify} messages.
             * @param message StampTargetCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IStampTargetCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StampTargetCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.StampTargetCar;

            /**
             * Decodes a StampTargetCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StampTargetCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.StampTargetCar;

            /**
             * Verifies a StampTargetCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StampTargetCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StampTargetCar
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.StampTargetCar;

            /**
             * Creates a plain object from a StampTargetCar message. Also converts values to other types if specified.
             * @param message StampTargetCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.StampTargetCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StampTargetCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StampTargetCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCar. */
        interface IGhostCar {

            /** GhostCar car */
            car: wm5.protobuf.ICar;

            /** GhostCar area */
            area?: (number|null);

            /** GhostCar ramp */
            ramp?: (number|null);

            /** GhostCar nonhuman */
            nonhuman?: (boolean|null);

            /** GhostCar characterEffect */
            characterEffect?: (number|null);

            /** GhostCar type */
            type?: (wm5.protobuf.GhostType|null);
        }

        /** Represents a GhostCar. */
        class GhostCar implements IGhostCar {

            /**
             * Constructs a new GhostCar.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostCar);

            /** GhostCar car. */
            public car: wm5.protobuf.ICar;

            /** GhostCar area. */
            public area: number;

            /** GhostCar ramp. */
            public ramp: number;

            /** GhostCar nonhuman. */
            public nonhuman: boolean;

            /** GhostCar characterEffect. */
            public characterEffect: number;

            /** GhostCar type. */
            public type: wm5.protobuf.GhostType;

            /**
             * Creates a new GhostCar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCar instance
             */
            public static create(properties?: wm5.protobuf.IGhostCar): wm5.protobuf.GhostCar;

            /**
             * Encodes the specified GhostCar message. Does not implicitly {@link wm5.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCar message, length delimited. Does not implicitly {@link wm5.protobuf.GhostCar.verify|verify} messages.
             * @param message GhostCar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostCar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostCar;

            /**
             * Decodes a GhostCar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostCar;

            /**
             * Verifies a GhostCar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCar
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostCar;

            /**
             * Creates a plain object from a GhostCar message. Also converts values to other types if specified.
             * @param message GhostCar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostCar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCar
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostTrail. */
        interface IGhostTrail {

            /** GhostTrail carId */
            carId: number;

            /** GhostTrail area */
            area: number;

            /** GhostTrail ramp */
            ramp: number;

            /** GhostTrail playedAt */
            playedAt: number;

            /** GhostTrail playedPlace */
            playedPlace?: (wm5.protobuf.IPlace|null);

            /** GhostTrail trail */
            trail: Uint8Array;
        }

        /** Represents a GhostTrail. */
        class GhostTrail implements IGhostTrail {

            /**
             * Constructs a new GhostTrail.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostTrail);

            /** GhostTrail carId. */
            public carId: number;

            /** GhostTrail area. */
            public area: number;

            /** GhostTrail ramp. */
            public ramp: number;

            /** GhostTrail playedAt. */
            public playedAt: number;

            /** GhostTrail playedPlace. */
            public playedPlace?: (wm5.protobuf.IPlace|null);

            /** GhostTrail trail. */
            public trail: Uint8Array;

            /**
             * Creates a new GhostTrail instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostTrail instance
             */
            public static create(properties?: wm5.protobuf.IGhostTrail): wm5.protobuf.GhostTrail;

            /**
             * Encodes the specified GhostTrail message. Does not implicitly {@link wm5.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostTrail message, length delimited. Does not implicitly {@link wm5.protobuf.GhostTrail.verify|verify} messages.
             * @param message GhostTrail message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostTrail, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostTrail;

            /**
             * Decodes a GhostTrail message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostTrail
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostTrail;

            /**
             * Verifies a GhostTrail message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostTrail message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostTrail
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostTrail;

            /**
             * Creates a plain object from a GhostTrail message. Also converts values to other types if specified.
             * @param message GhostTrail
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostTrail, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostTrail to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostTrail
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Team. */
        interface ITeam {

            /** Team teamId */
            teamId: number;

            /** Team name */
            name: string;

            /** Team numOfMembers */
            numOfMembers: number;

            /** Team numOfMemberCars */
            numOfMemberCars: number;

            /** Team leaderUserId */
            leaderUserId: number;

            /** Team leaderCarName */
            leaderCarName: string;

            /** Team leaderRegionId */
            leaderRegionId: number;

            /** Team stickerFont */
            stickerFont: number;

            /** Team fullfilled */
            fullfilled: boolean;

            /** Team closed */
            closed: boolean;

            /** Team recruitmentSuspended */
            recruitmentSuspended: boolean;

            /** Team createdAt */
            createdAt: number;

            /** Team homePlace */
            homePlace: wm5.protobuf.IPlace;
        }

        /** Represents a Team. */
        class Team implements ITeam {

            /**
             * Constructs a new Team.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITeam);

            /** Team teamId. */
            public teamId: number;

            /** Team name. */
            public name: string;

            /** Team numOfMembers. */
            public numOfMembers: number;

            /** Team numOfMemberCars. */
            public numOfMemberCars: number;

            /** Team leaderUserId. */
            public leaderUserId: number;

            /** Team leaderCarName. */
            public leaderCarName: string;

            /** Team leaderRegionId. */
            public leaderRegionId: number;

            /** Team stickerFont. */
            public stickerFont: number;

            /** Team fullfilled. */
            public fullfilled: boolean;

            /** Team closed. */
            public closed: boolean;

            /** Team recruitmentSuspended. */
            public recruitmentSuspended: boolean;

            /** Team createdAt. */
            public createdAt: number;

            /** Team homePlace. */
            public homePlace: wm5.protobuf.IPlace;

            /**
             * Creates a new Team instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Team instance
             */
            public static create(properties?: wm5.protobuf.ITeam): wm5.protobuf.Team;

            /**
             * Encodes the specified Team message. Does not implicitly {@link wm5.protobuf.Team.verify|verify} messages.
             * @param message Team message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Team message, length delimited. Does not implicitly {@link wm5.protobuf.Team.verify|verify} messages.
             * @param message Team message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Team message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.Team;

            /**
             * Decodes a Team message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Team
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.Team;

            /**
             * Verifies a Team message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Team message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Team
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.Team;

            /**
             * Creates a plain object from a Team message. Also converts values to other types if specified.
             * @param message Team
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Team to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Team
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TeamMember. */
        interface ITeamMember {

            /** TeamMember userId */
            userId: number;

            /** TeamMember car */
            car: wm5.protobuf.ICar;

            /** TeamMember numOfOwnedCars */
            numOfOwnedCars: number;
        }

        /** Represents a TeamMember. */
        class TeamMember implements ITeamMember {

            /**
             * Constructs a new TeamMember.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITeamMember);

            /** TeamMember userId. */
            public userId: number;

            /** TeamMember car. */
            public car: wm5.protobuf.ICar;

            /** TeamMember numOfOwnedCars. */
            public numOfOwnedCars: number;

            /**
             * Creates a new TeamMember instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamMember instance
             */
            public static create(properties?: wm5.protobuf.ITeamMember): wm5.protobuf.TeamMember;

            /**
             * Encodes the specified TeamMember message. Does not implicitly {@link wm5.protobuf.TeamMember.verify|verify} messages.
             * @param message TeamMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITeamMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamMember message, length delimited. Does not implicitly {@link wm5.protobuf.TeamMember.verify|verify} messages.
             * @param message TeamMember message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITeamMember, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamMember message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.TeamMember;

            /**
             * Decodes a TeamMember message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamMember
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.TeamMember;

            /**
             * Verifies a TeamMember message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TeamMember message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TeamMember
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.TeamMember;

            /**
             * Creates a plain object from a TeamMember message. Also converts values to other types if specified.
             * @param message TeamMember
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.TeamMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TeamMember to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TeamMember
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TeamApplicant. */
        interface ITeamApplicant {

            /** TeamApplicant userId */
            userId: number;

            /** TeamApplicant car */
            car: wm5.protobuf.ICar;

            /** TeamApplicant numOfOwnedCars */
            numOfOwnedCars: number;

            /** TeamApplicant expiresAt */
            expiresAt: number;
        }

        /** Represents a TeamApplicant. */
        class TeamApplicant implements ITeamApplicant {

            /**
             * Constructs a new TeamApplicant.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITeamApplicant);

            /** TeamApplicant userId. */
            public userId: number;

            /** TeamApplicant car. */
            public car: wm5.protobuf.ICar;

            /** TeamApplicant numOfOwnedCars. */
            public numOfOwnedCars: number;

            /** TeamApplicant expiresAt. */
            public expiresAt: number;

            /**
             * Creates a new TeamApplicant instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TeamApplicant instance
             */
            public static create(properties?: wm5.protobuf.ITeamApplicant): wm5.protobuf.TeamApplicant;

            /**
             * Encodes the specified TeamApplicant message. Does not implicitly {@link wm5.protobuf.TeamApplicant.verify|verify} messages.
             * @param message TeamApplicant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITeamApplicant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TeamApplicant message, length delimited. Does not implicitly {@link wm5.protobuf.TeamApplicant.verify|verify} messages.
             * @param message TeamApplicant message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITeamApplicant, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TeamApplicant message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TeamApplicant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.TeamApplicant;

            /**
             * Decodes a TeamApplicant message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TeamApplicant
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.TeamApplicant;

            /**
             * Verifies a TeamApplicant message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TeamApplicant message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TeamApplicant
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.TeamApplicant;

            /**
             * Creates a plain object from a TeamApplicant message. Also converts values to other types if specified.
             * @param message TeamApplicant
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.TeamApplicant, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TeamApplicant to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TeamApplicant
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Place. */
        interface IPlace {

            /** Place placeId */
            placeId: string;

            /** Place shopName */
            shopName: string;

            /** Place regionId */
            regionId: number;

            /** Place country */
            country: string;
        }

        /** Represents a Place. */
        class Place implements IPlace {

            /**
             * Constructs a new Place.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IPlace);

            /** Place placeId. */
            public placeId: string;

            /** Place shopName. */
            public shopName: string;

            /** Place regionId. */
            public regionId: number;

            /** Place country. */
            public country: string;

            /**
             * Creates a new Place instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Place instance
             */
            public static create(properties?: wm5.protobuf.IPlace): wm5.protobuf.Place;

            /**
             * Encodes the specified Place message. Does not implicitly {@link wm5.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Place message, length delimited. Does not implicitly {@link wm5.protobuf.Place.verify|verify} messages.
             * @param message Place message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IPlace, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Place message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.Place;

            /**
             * Decodes a Place message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Place
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.Place;

            /**
             * Verifies a Place message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Place message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Place
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.Place;

            /**
             * Creates a plain object from a Place message. Also converts values to other types if specified.
             * @param message Place
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.Place, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Place to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Place
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SystemSetting. */
        interface ISystemSetting {

            /** SystemSetting mCoinChute */
            mCoinChute: number;

            /** SystemSetting mBuyCardCost */
            mBuyCardCost: number;

            /** SystemSetting mGameCost */
            mGameCost: number;

            /** SystemSetting mContinueCost */
            mContinueCost: number;

            /** SystemSetting mFullCourseCost */
            mFullCourseCost: number;

            /** SystemSetting mFreePlay */
            mFreePlay: boolean;

            /** SystemSetting mPcbId */
            mPcbId?: (number|null);

            /** SystemSetting mIcCardRw */
            mIcCardRw: boolean;

            /** SystemSetting mIcCardVender */
            mIcCardVender: boolean;

            /** SystemSetting mMgCardRw */
            mMgCardRw?: (boolean|null);

            /** SystemSetting mForceFeedback */
            mForceFeedback?: (boolean|null);

            /** SystemSetting mWinsAndRemains */
            mWinsAndRemains: boolean;

            /** SystemSetting mEventMode */
            mEventMode: number;

            /** SystemSetting mEventModeDist */
            mEventModeDist: boolean;

            /** SystemSetting mCloseType */
            mCloseType: number;

            /** SystemSetting mCloseSun */
            mCloseSun: number;

            /** SystemSetting mCloseMon */
            mCloseMon: number;

            /** SystemSetting mCloseTue */
            mCloseTue: number;

            /** SystemSetting mCloseWed */
            mCloseWed: number;

            /** SystemSetting mCloseThu */
            mCloseThu: number;

            /** SystemSetting mCloseFri */
            mCloseFri: number;

            /** SystemSetting mCloseSat */
            mCloseSat: number;

            /** SystemSetting mCloseDay */
            mCloseDay: number;

            /** SystemSetting mTouchPanel */
            mTouchPanel?: (boolean|null);

            /** SystemSetting mGameVol */
            mGameVol: number;

            /** SystemSetting mAttractVol */
            mAttractVol: number;

            /** SystemSetting mCalibHandleCenter */
            mCalibHandleCenter?: (number|null);

            /** SystemSetting mCalibAccelCenter */
            mCalibAccelCenter?: (number|null);

            /** SystemSetting mCalibBrakeCenter */
            mCalibBrakeCenter?: (number|null);

            /** SystemSetting mCalibTouchLeft */
            mCalibTouchLeft?: (number|null);

            /** SystemSetting mCalibTouchRight */
            mCalibTouchRight?: (number|null);

            /** SystemSetting mCalibTouchTop */
            mCalibTouchTop?: (number|null);

            /** SystemSetting mCalibTouchBottom */
            mCalibTouchBottom?: (number|null);

            /** SystemSetting mBanacoinEnabled */
            mBanacoinEnabled?: (boolean|null);

            /** SystemSetting mScratchCost */
            mScratchCost?: (number|null);
        }

        /** Represents a SystemSetting. */
        class SystemSetting implements ISystemSetting {

            /**
             * Constructs a new SystemSetting.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISystemSetting);

            /** SystemSetting mCoinChute. */
            public mCoinChute: number;

            /** SystemSetting mBuyCardCost. */
            public mBuyCardCost: number;

            /** SystemSetting mGameCost. */
            public mGameCost: number;

            /** SystemSetting mContinueCost. */
            public mContinueCost: number;

            /** SystemSetting mFullCourseCost. */
            public mFullCourseCost: number;

            /** SystemSetting mFreePlay. */
            public mFreePlay: boolean;

            /** SystemSetting mPcbId. */
            public mPcbId: number;

            /** SystemSetting mIcCardRw. */
            public mIcCardRw: boolean;

            /** SystemSetting mIcCardVender. */
            public mIcCardVender: boolean;

            /** SystemSetting mMgCardRw. */
            public mMgCardRw: boolean;

            /** SystemSetting mForceFeedback. */
            public mForceFeedback: boolean;

            /** SystemSetting mWinsAndRemains. */
            public mWinsAndRemains: boolean;

            /** SystemSetting mEventMode. */
            public mEventMode: number;

            /** SystemSetting mEventModeDist. */
            public mEventModeDist: boolean;

            /** SystemSetting mCloseType. */
            public mCloseType: number;

            /** SystemSetting mCloseSun. */
            public mCloseSun: number;

            /** SystemSetting mCloseMon. */
            public mCloseMon: number;

            /** SystemSetting mCloseTue. */
            public mCloseTue: number;

            /** SystemSetting mCloseWed. */
            public mCloseWed: number;

            /** SystemSetting mCloseThu. */
            public mCloseThu: number;

            /** SystemSetting mCloseFri. */
            public mCloseFri: number;

            /** SystemSetting mCloseSat. */
            public mCloseSat: number;

            /** SystemSetting mCloseDay. */
            public mCloseDay: number;

            /** SystemSetting mTouchPanel. */
            public mTouchPanel: boolean;

            /** SystemSetting mGameVol. */
            public mGameVol: number;

            /** SystemSetting mAttractVol. */
            public mAttractVol: number;

            /** SystemSetting mCalibHandleCenter. */
            public mCalibHandleCenter: number;

            /** SystemSetting mCalibAccelCenter. */
            public mCalibAccelCenter: number;

            /** SystemSetting mCalibBrakeCenter. */
            public mCalibBrakeCenter: number;

            /** SystemSetting mCalibTouchLeft. */
            public mCalibTouchLeft: number;

            /** SystemSetting mCalibTouchRight. */
            public mCalibTouchRight: number;

            /** SystemSetting mCalibTouchTop. */
            public mCalibTouchTop: number;

            /** SystemSetting mCalibTouchBottom. */
            public mCalibTouchBottom: number;

            /** SystemSetting mBanacoinEnabled. */
            public mBanacoinEnabled: boolean;

            /** SystemSetting mScratchCost. */
            public mScratchCost: number;

            /**
             * Creates a new SystemSetting instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SystemSetting instance
             */
            public static create(properties?: wm5.protobuf.ISystemSetting): wm5.protobuf.SystemSetting;

            /**
             * Encodes the specified SystemSetting message. Does not implicitly {@link wm5.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SystemSetting message, length delimited. Does not implicitly {@link wm5.protobuf.SystemSetting.verify|verify} messages.
             * @param message SystemSetting message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISystemSetting, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SystemSetting;

            /**
             * Decodes a SystemSetting message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SystemSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SystemSetting;

            /**
             * Verifies a SystemSetting message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SystemSetting message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SystemSetting
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SystemSetting;

            /**
             * Creates a plain object from a SystemSetting message. Also converts values to other types if specified.
             * @param message SystemSetting
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SystemSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SystemSetting to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SystemSetting
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionSchedule. */
        interface IGhostCompetitionSchedule {

            /** GhostCompetitionSchedule competitionId */
            competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt */
            qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt */
            qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt */
            competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt */
            competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt */
            competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod */
            lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval */
            lengthOfInterval: number;

            /** GhostCompetitionSchedule area */
            area: number;

            /** GhostCompetitionSchedule minigamePatternId */
            minigamePatternId: number;
        }

        /** Represents a GhostCompetitionSchedule. */
        class GhostCompetitionSchedule implements IGhostCompetitionSchedule {

            /**
             * Constructs a new GhostCompetitionSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostCompetitionSchedule);

            /** GhostCompetitionSchedule competitionId. */
            public competitionId: number;

            /** GhostCompetitionSchedule qualifyingPeriodStartAt. */
            public qualifyingPeriodStartAt: number;

            /** GhostCompetitionSchedule qualifyingPeriodCloseAt. */
            public qualifyingPeriodCloseAt: number;

            /** GhostCompetitionSchedule competitionStartAt. */
            public competitionStartAt: number;

            /** GhostCompetitionSchedule competitionCloseAt. */
            public competitionCloseAt: number;

            /** GhostCompetitionSchedule competitionEndAt. */
            public competitionEndAt: number;

            /** GhostCompetitionSchedule lengthOfPeriod. */
            public lengthOfPeriod: number;

            /** GhostCompetitionSchedule lengthOfInterval. */
            public lengthOfInterval: number;

            /** GhostCompetitionSchedule area. */
            public area: number;

            /** GhostCompetitionSchedule minigamePatternId. */
            public minigamePatternId: number;

            /**
             * Creates a new GhostCompetitionSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionSchedule instance
             */
            public static create(properties?: wm5.protobuf.IGhostCompetitionSchedule): wm5.protobuf.GhostCompetitionSchedule;

            /**
             * Encodes the specified GhostCompetitionSchedule message. Does not implicitly {@link wm5.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionSchedule message, length delimited. Does not implicitly {@link wm5.protobuf.GhostCompetitionSchedule.verify|verify} messages.
             * @param message GhostCompetitionSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostCompetitionSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostCompetitionSchedule;

            /**
             * Decodes a GhostCompetitionSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostCompetitionSchedule;

            /**
             * Verifies a GhostCompetitionSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostCompetitionSchedule;

            /**
             * Creates a plain object from a GhostCompetitionSchedule message. Also converts values to other types if specified.
             * @param message GhostCompetitionSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostCompetitionSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostCompetitionParameter. */
        interface IGhostCompetitionParameter {

            /** GhostCompetitionParameter parameters1 */
            parameters1?: (number[]|null);

            /** GhostCompetitionParameter parameters2 */
            parameters2: boolean;
        }

        /** Represents a GhostCompetitionParameter. */
        class GhostCompetitionParameter implements IGhostCompetitionParameter {

            /**
             * Constructs a new GhostCompetitionParameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostCompetitionParameter);

            /** GhostCompetitionParameter parameters1. */
            public parameters1: number[];

            /** GhostCompetitionParameter parameters2. */
            public parameters2: boolean;

            /**
             * Creates a new GhostCompetitionParameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionParameter instance
             */
            public static create(properties?: wm5.protobuf.IGhostCompetitionParameter): wm5.protobuf.GhostCompetitionParameter;

            /**
             * Encodes the specified GhostCompetitionParameter message. Does not implicitly {@link wm5.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionParameter message, length delimited. Does not implicitly {@link wm5.protobuf.GhostCompetitionParameter.verify|verify} messages.
             * @param message GhostCompetitionParameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostCompetitionParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostCompetitionParameter;

            /**
             * Decodes a GhostCompetitionParameter message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionParameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostCompetitionParameter;

            /**
             * Verifies a GhostCompetitionParameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionParameter message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionParameter
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostCompetitionParameter;

            /**
             * Creates a plain object from a GhostCompetitionParameter message. Also converts values to other types if specified.
             * @param message GhostCompetitionParameter
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostCompetitionParameter, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionParameter to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionParameter
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SpecialGhostSchedule. */
        interface ISpecialGhostSchedule {

            /** SpecialGhostSchedule startAt */
            startAt: number;

            /** SpecialGhostSchedule endAt */
            endAt: number;

            /** SpecialGhostSchedule announcementEndAt */
            announcementEndAt: number;
        }

        /** Represents a SpecialGhostSchedule. */
        class SpecialGhostSchedule implements ISpecialGhostSchedule {

            /**
             * Constructs a new SpecialGhostSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISpecialGhostSchedule);

            /** SpecialGhostSchedule startAt. */
            public startAt: number;

            /** SpecialGhostSchedule endAt. */
            public endAt: number;

            /** SpecialGhostSchedule announcementEndAt. */
            public announcementEndAt: number;

            /**
             * Creates a new SpecialGhostSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecialGhostSchedule instance
             */
            public static create(properties?: wm5.protobuf.ISpecialGhostSchedule): wm5.protobuf.SpecialGhostSchedule;

            /**
             * Encodes the specified SpecialGhostSchedule message. Does not implicitly {@link wm5.protobuf.SpecialGhostSchedule.verify|verify} messages.
             * @param message SpecialGhostSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISpecialGhostSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecialGhostSchedule message, length delimited. Does not implicitly {@link wm5.protobuf.SpecialGhostSchedule.verify|verify} messages.
             * @param message SpecialGhostSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISpecialGhostSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecialGhostSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecialGhostSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SpecialGhostSchedule;

            /**
             * Decodes a SpecialGhostSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecialGhostSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SpecialGhostSchedule;

            /**
             * Verifies a SpecialGhostSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecialGhostSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecialGhostSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SpecialGhostSchedule;

            /**
             * Creates a plain object from a SpecialGhostSchedule message. Also converts values to other types if specified.
             * @param message SpecialGhostSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SpecialGhostSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecialGhostSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SpecialGhostSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SpecialAuraMotif. */
        interface ISpecialAuraMotif {

            /** SpecialAuraMotif auraMotif */
            auraMotif: number;

            /** SpecialAuraMotif medalPoints */
            medalPoints: number;
        }

        /** Represents a SpecialAuraMotif. */
        class SpecialAuraMotif implements ISpecialAuraMotif {

            /**
             * Constructs a new SpecialAuraMotif.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ISpecialAuraMotif);

            /** SpecialAuraMotif auraMotif. */
            public auraMotif: number;

            /** SpecialAuraMotif medalPoints. */
            public medalPoints: number;

            /**
             * Creates a new SpecialAuraMotif instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpecialAuraMotif instance
             */
            public static create(properties?: wm5.protobuf.ISpecialAuraMotif): wm5.protobuf.SpecialAuraMotif;

            /**
             * Encodes the specified SpecialAuraMotif message. Does not implicitly {@link wm5.protobuf.SpecialAuraMotif.verify|verify} messages.
             * @param message SpecialAuraMotif message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ISpecialAuraMotif, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpecialAuraMotif message, length delimited. Does not implicitly {@link wm5.protobuf.SpecialAuraMotif.verify|verify} messages.
             * @param message SpecialAuraMotif message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ISpecialAuraMotif, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpecialAuraMotif message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpecialAuraMotif
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.SpecialAuraMotif;

            /**
             * Decodes a SpecialAuraMotif message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpecialAuraMotif
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.SpecialAuraMotif;

            /**
             * Verifies a SpecialAuraMotif message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpecialAuraMotif message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpecialAuraMotif
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.SpecialAuraMotif;

            /**
             * Creates a plain object from a SpecialAuraMotif message. Also converts values to other types if specified.
             * @param message SpecialAuraMotif
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.SpecialAuraMotif, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpecialAuraMotif to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SpecialAuraMotif
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TransferNotice. */
        interface ITransferNotice {

            /** TransferNotice needToSeeTransferred */
            needToSeeTransferred: boolean;

            /** TransferNotice needToRenameCar */
            needToRenameCar: boolean;

            /** TransferNotice needToRenameTeam */
            needToRenameTeam: boolean;
        }

        /** Represents a TransferNotice. */
        class TransferNotice implements ITransferNotice {

            /**
             * Constructs a new TransferNotice.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ITransferNotice);

            /** TransferNotice needToSeeTransferred. */
            public needToSeeTransferred: boolean;

            /** TransferNotice needToRenameCar. */
            public needToRenameCar: boolean;

            /** TransferNotice needToRenameTeam. */
            public needToRenameTeam: boolean;

            /**
             * Creates a new TransferNotice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TransferNotice instance
             */
            public static create(properties?: wm5.protobuf.ITransferNotice): wm5.protobuf.TransferNotice;

            /**
             * Encodes the specified TransferNotice message. Does not implicitly {@link wm5.protobuf.TransferNotice.verify|verify} messages.
             * @param message TransferNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ITransferNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TransferNotice message, length delimited. Does not implicitly {@link wm5.protobuf.TransferNotice.verify|verify} messages.
             * @param message TransferNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ITransferNotice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TransferNotice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TransferNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.TransferNotice;

            /**
             * Decodes a TransferNotice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TransferNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.TransferNotice;

            /**
             * Verifies a TransferNotice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TransferNotice message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TransferNotice
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.TransferNotice;

            /**
             * Creates a plain object from a TransferNotice message. Also converts values to other types if specified.
             * @param message TransferNotice
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.TransferNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TransferNotice to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TransferNotice
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RepayingCampaignSchedule. */
        interface IRepayingCampaignSchedule {

            /** RepayingCampaignSchedule startAt */
            startAt: number;

            /** RepayingCampaignSchedule endAt */
            endAt: number;

            /** RepayingCampaignSchedule announcementEndAt */
            announcementEndAt: number;

            /** RepayingCampaignSchedule targetMaxiGold */
            targetMaxiGold: number;

            /** RepayingCampaignSchedule repaymentMaxiGold */
            repaymentMaxiGold: number;
        }

        /** Represents a RepayingCampaignSchedule. */
        class RepayingCampaignSchedule implements IRepayingCampaignSchedule {

            /**
             * Constructs a new RepayingCampaignSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IRepayingCampaignSchedule);

            /** RepayingCampaignSchedule startAt. */
            public startAt: number;

            /** RepayingCampaignSchedule endAt. */
            public endAt: number;

            /** RepayingCampaignSchedule announcementEndAt. */
            public announcementEndAt: number;

            /** RepayingCampaignSchedule targetMaxiGold. */
            public targetMaxiGold: number;

            /** RepayingCampaignSchedule repaymentMaxiGold. */
            public repaymentMaxiGold: number;

            /**
             * Creates a new RepayingCampaignSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RepayingCampaignSchedule instance
             */
            public static create(properties?: wm5.protobuf.IRepayingCampaignSchedule): wm5.protobuf.RepayingCampaignSchedule;

            /**
             * Encodes the specified RepayingCampaignSchedule message. Does not implicitly {@link wm5.protobuf.RepayingCampaignSchedule.verify|verify} messages.
             * @param message RepayingCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IRepayingCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RepayingCampaignSchedule message, length delimited. Does not implicitly {@link wm5.protobuf.RepayingCampaignSchedule.verify|verify} messages.
             * @param message RepayingCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IRepayingCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RepayingCampaignSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RepayingCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.RepayingCampaignSchedule;

            /**
             * Decodes a RepayingCampaignSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RepayingCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.RepayingCampaignSchedule;

            /**
             * Verifies a RepayingCampaignSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RepayingCampaignSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RepayingCampaignSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.RepayingCampaignSchedule;

            /**
             * Creates a plain object from a RepayingCampaignSchedule message. Also converts values to other types if specified.
             * @param message RepayingCampaignSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.RepayingCampaignSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RepayingCampaignSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RepayingCampaignSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GameFeatureVersion. */
        interface IGameFeatureVersion {

            /** GameFeatureVersion version */
            version: number;

            /** GameFeatureVersion year */
            year: number;

            /** GameFeatureVersion month */
            month: number;

            /** GameFeatureVersion pluses */
            pluses: number;

            /** GameFeatureVersion releaseAt */
            releaseAt: number;
        }

        /** Represents a GameFeatureVersion. */
        class GameFeatureVersion implements IGameFeatureVersion {

            /**
             * Constructs a new GameFeatureVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGameFeatureVersion);

            /** GameFeatureVersion version. */
            public version: number;

            /** GameFeatureVersion year. */
            public year: number;

            /** GameFeatureVersion month. */
            public month: number;

            /** GameFeatureVersion pluses. */
            public pluses: number;

            /** GameFeatureVersion releaseAt. */
            public releaseAt: number;

            /**
             * Creates a new GameFeatureVersion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GameFeatureVersion instance
             */
            public static create(properties?: wm5.protobuf.IGameFeatureVersion): wm5.protobuf.GameFeatureVersion;

            /**
             * Encodes the specified GameFeatureVersion message. Does not implicitly {@link wm5.protobuf.GameFeatureVersion.verify|verify} messages.
             * @param message GameFeatureVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGameFeatureVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GameFeatureVersion message, length delimited. Does not implicitly {@link wm5.protobuf.GameFeatureVersion.verify|verify} messages.
             * @param message GameFeatureVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGameFeatureVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GameFeatureVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GameFeatureVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GameFeatureVersion;

            /**
             * Decodes a GameFeatureVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GameFeatureVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GameFeatureVersion;

            /**
             * Verifies a GameFeatureVersion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GameFeatureVersion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GameFeatureVersion
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GameFeatureVersion;

            /**
             * Creates a plain object from a GameFeatureVersion message. Also converts values to other types if specified.
             * @param message GameFeatureVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GameFeatureVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GameFeatureVersion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GameFeatureVersion
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BingoSchedule. */
        interface IBingoSchedule {

            /** BingoSchedule id */
            id: number;

            /** BingoSchedule announcementStartAt */
            announcementStartAt: number;

            /** BingoSchedule startAt */
            startAt: number;

            /** BingoSchedule endAt */
            endAt: number;

            /** BingoSchedule numOfDeletionsToAcquireNameBonus */
            numOfDeletionsToAcquireNameBonus: number;

            /** BingoSchedule nameBonusSelectable */
            nameBonusSelectable: boolean;

            /** BingoSchedule prizeItemId1 */
            prizeItemId1: number;

            /** BingoSchedule prizeItemId2 */
            prizeItemId2: number;

            /** BingoSchedule prizeItemId3 */
            prizeItemId3: number;
        }

        /** Represents a BingoSchedule. */
        class BingoSchedule implements IBingoSchedule {

            /**
             * Constructs a new BingoSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IBingoSchedule);

            /** BingoSchedule id. */
            public id: number;

            /** BingoSchedule announcementStartAt. */
            public announcementStartAt: number;

            /** BingoSchedule startAt. */
            public startAt: number;

            /** BingoSchedule endAt. */
            public endAt: number;

            /** BingoSchedule numOfDeletionsToAcquireNameBonus. */
            public numOfDeletionsToAcquireNameBonus: number;

            /** BingoSchedule nameBonusSelectable. */
            public nameBonusSelectable: boolean;

            /** BingoSchedule prizeItemId1. */
            public prizeItemId1: number;

            /** BingoSchedule prizeItemId2. */
            public prizeItemId2: number;

            /** BingoSchedule prizeItemId3. */
            public prizeItemId3: number;

            /**
             * Creates a new BingoSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BingoSchedule instance
             */
            public static create(properties?: wm5.protobuf.IBingoSchedule): wm5.protobuf.BingoSchedule;

            /**
             * Encodes the specified BingoSchedule message. Does not implicitly {@link wm5.protobuf.BingoSchedule.verify|verify} messages.
             * @param message BingoSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IBingoSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BingoSchedule message, length delimited. Does not implicitly {@link wm5.protobuf.BingoSchedule.verify|verify} messages.
             * @param message BingoSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IBingoSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BingoSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BingoSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.BingoSchedule;

            /**
             * Decodes a BingoSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BingoSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.BingoSchedule;

            /**
             * Verifies a BingoSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BingoSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BingoSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.BingoSchedule;

            /**
             * Creates a plain object from a BingoSchedule message. Also converts values to other types if specified.
             * @param message BingoSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.BingoSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BingoSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BingoSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BingoCard. */
        interface IBingoCard {

            /** BingoCard numOfSquares */
            numOfSquares: number;

            /** BingoCard sheet */
            sheet?: (string[]|null);

            /** BingoCard completed */
            completed?: (boolean|null);

            /** BingoCard bingoCardId */
            bingoCardId?: (number|null);
        }

        /** Represents a BingoCard. */
        class BingoCard implements IBingoCard {

            /**
             * Constructs a new BingoCard.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IBingoCard);

            /** BingoCard numOfSquares. */
            public numOfSquares: number;

            /** BingoCard sheet. */
            public sheet: string[];

            /** BingoCard completed. */
            public completed: boolean;

            /** BingoCard bingoCardId. */
            public bingoCardId: number;

            /**
             * Creates a new BingoCard instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BingoCard instance
             */
            public static create(properties?: wm5.protobuf.IBingoCard): wm5.protobuf.BingoCard;

            /**
             * Encodes the specified BingoCard message. Does not implicitly {@link wm5.protobuf.BingoCard.verify|verify} messages.
             * @param message BingoCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IBingoCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BingoCard message, length delimited. Does not implicitly {@link wm5.protobuf.BingoCard.verify|verify} messages.
             * @param message BingoCard message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IBingoCard, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BingoCard message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BingoCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.BingoCard;

            /**
             * Decodes a BingoCard message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BingoCard
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.BingoCard;

            /**
             * Verifies a BingoCard message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BingoCard message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BingoCard
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.BingoCard;

            /**
             * Creates a plain object from a BingoCard message. Also converts values to other types if specified.
             * @param message BingoCard
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.BingoCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BingoCard to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BingoCard
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarCampaignSchedule. */
        interface ICarCampaignSchedule {

            /** CarCampaignSchedule campaignId */
            campaignId: number;

            /** CarCampaignSchedule announcementStartAt */
            announcementStartAt: number;

            /** CarCampaignSchedule startAt */
            startAt: number;

            /** CarCampaignSchedule endAt */
            endAt: number;
        }

        /** Represents a CarCampaignSchedule. */
        class CarCampaignSchedule implements ICarCampaignSchedule {

            /**
             * Constructs a new CarCampaignSchedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICarCampaignSchedule);

            /** CarCampaignSchedule campaignId. */
            public campaignId: number;

            /** CarCampaignSchedule announcementStartAt. */
            public announcementStartAt: number;

            /** CarCampaignSchedule startAt. */
            public startAt: number;

            /** CarCampaignSchedule endAt. */
            public endAt: number;

            /**
             * Creates a new CarCampaignSchedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarCampaignSchedule instance
             */
            public static create(properties?: wm5.protobuf.ICarCampaignSchedule): wm5.protobuf.CarCampaignSchedule;

            /**
             * Encodes the specified CarCampaignSchedule message. Does not implicitly {@link wm5.protobuf.CarCampaignSchedule.verify|verify} messages.
             * @param message CarCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICarCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarCampaignSchedule message, length delimited. Does not implicitly {@link wm5.protobuf.CarCampaignSchedule.verify|verify} messages.
             * @param message CarCampaignSchedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICarCampaignSchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarCampaignSchedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CarCampaignSchedule;

            /**
             * Decodes a CarCampaignSchedule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarCampaignSchedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CarCampaignSchedule;

            /**
             * Verifies a CarCampaignSchedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarCampaignSchedule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarCampaignSchedule
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CarCampaignSchedule;

            /**
             * Creates a plain object from a CarCampaignSchedule message. Also converts values to other types if specified.
             * @param message CarCampaignSchedule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CarCampaignSchedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarCampaignSchedule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarCampaignSchedule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ScratchSheet. */
        interface IScratchSheet {

            /** ScratchSheet squares */
            squares?: (wm5.protobuf.ScratchSheet.IScratchSquare[]|null);
        }

        /** Represents a ScratchSheet. */
        class ScratchSheet implements IScratchSheet {

            /**
             * Constructs a new ScratchSheet.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IScratchSheet);

            /** ScratchSheet squares. */
            public squares: wm5.protobuf.ScratchSheet.IScratchSquare[];

            /**
             * Creates a new ScratchSheet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ScratchSheet instance
             */
            public static create(properties?: wm5.protobuf.IScratchSheet): wm5.protobuf.ScratchSheet;

            /**
             * Encodes the specified ScratchSheet message. Does not implicitly {@link wm5.protobuf.ScratchSheet.verify|verify} messages.
             * @param message ScratchSheet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IScratchSheet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ScratchSheet message, length delimited. Does not implicitly {@link wm5.protobuf.ScratchSheet.verify|verify} messages.
             * @param message ScratchSheet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IScratchSheet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ScratchSheet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ScratchSheet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ScratchSheet;

            /**
             * Decodes a ScratchSheet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ScratchSheet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ScratchSheet;

            /**
             * Verifies a ScratchSheet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ScratchSheet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ScratchSheet
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.ScratchSheet;

            /**
             * Creates a plain object from a ScratchSheet message. Also converts values to other types if specified.
             * @param message ScratchSheet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.ScratchSheet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ScratchSheet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ScratchSheet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ScratchSheet {

            /** Properties of a ScratchSquare. */
            interface IScratchSquare {

                /** ScratchSquare category */
                category: wm5.protobuf.ItemCategory;

                /** ScratchSquare itemId */
                itemId: number;

                /** ScratchSquare earned */
                earned: boolean;
            }

            /** Represents a ScratchSquare. */
            class ScratchSquare implements IScratchSquare {

                /**
                 * Constructs a new ScratchSquare.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.ScratchSheet.IScratchSquare);

                /** ScratchSquare category. */
                public category: wm5.protobuf.ItemCategory;

                /** ScratchSquare itemId. */
                public itemId: number;

                /** ScratchSquare earned. */
                public earned: boolean;

                /**
                 * Creates a new ScratchSquare instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ScratchSquare instance
                 */
                public static create(properties?: wm5.protobuf.ScratchSheet.IScratchSquare): wm5.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Encodes the specified ScratchSquare message. Does not implicitly {@link wm5.protobuf.ScratchSheet.ScratchSquare.verify|verify} messages.
                 * @param message ScratchSquare message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.ScratchSheet.IScratchSquare, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ScratchSquare message, length delimited. Does not implicitly {@link wm5.protobuf.ScratchSheet.ScratchSquare.verify|verify} messages.
                 * @param message ScratchSquare message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.ScratchSheet.IScratchSquare, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ScratchSquare message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ScratchSquare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Decodes a ScratchSquare message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ScratchSquare
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Verifies a ScratchSquare message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ScratchSquare message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ScratchSquare
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.ScratchSheet.ScratchSquare;

                /**
                 * Creates a plain object from a ScratchSquare message. Also converts values to other types if specified.
                 * @param message ScratchSquare
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.ScratchSheet.ScratchSquare, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ScratchSquare to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ScratchSquare
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a UserItem. */
        interface IUserItem {

            /** UserItem category */
            category: wm5.protobuf.ItemCategory;

            /** UserItem itemId */
            itemId: number;

            /** UserItem userItemId */
            userItemId: number;

            /** UserItem earnedAt */
            earnedAt?: (number|null);
        }

        /** Represents a UserItem. */
        class UserItem implements IUserItem {

            /**
             * Constructs a new UserItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IUserItem);

            /** UserItem category. */
            public category: wm5.protobuf.ItemCategory;

            /** UserItem itemId. */
            public itemId: number;

            /** UserItem userItemId. */
            public userItemId: number;

            /** UserItem earnedAt. */
            public earnedAt: number;

            /**
             * Creates a new UserItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserItem instance
             */
            public static create(properties?: wm5.protobuf.IUserItem): wm5.protobuf.UserItem;

            /**
             * Encodes the specified UserItem message. Does not implicitly {@link wm5.protobuf.UserItem.verify|verify} messages.
             * @param message UserItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserItem message, length delimited. Does not implicitly {@link wm5.protobuf.UserItem.verify|verify} messages.
             * @param message UserItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IUserItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.UserItem;

            /**
             * Decodes a UserItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.UserItem;

            /**
             * Verifies a UserItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserItem
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.UserItem;

            /**
             * Creates a plain object from a UserItem message. Also converts values to other types if specified.
             * @param message UserItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.UserItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlaceList. */
        interface IPlaceList {

            /** PlaceList places */
            places?: (wm5.protobuf.IPlace[]|null);
        }

        /** Represents a PlaceList. */
        class PlaceList implements IPlaceList {

            /**
             * Constructs a new PlaceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IPlaceList);

            /** PlaceList places. */
            public places: wm5.protobuf.IPlace[];

            /**
             * Creates a new PlaceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlaceList instance
             */
            public static create(properties?: wm5.protobuf.IPlaceList): wm5.protobuf.PlaceList;

            /**
             * Encodes the specified PlaceList message. Does not implicitly {@link wm5.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlaceList message, length delimited. Does not implicitly {@link wm5.protobuf.PlaceList.verify|verify} messages.
             * @param message PlaceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IPlaceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlaceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.PlaceList;

            /**
             * Decodes a PlaceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlaceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.PlaceList;

            /**
             * Verifies a PlaceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlaceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlaceList
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.PlaceList;

            /**
             * Creates a plain object from a PlaceList message. Also converts values to other types if specified.
             * @param message PlaceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.PlaceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlaceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlaceList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostList. */
        interface IGhostList {

            /** GhostList ghosts */
            ghosts?: (wm5.protobuf.IGhostCar[]|null);
        }

        /** Represents a GhostList. */
        class GhostList implements IGhostList {

            /**
             * Constructs a new GhostList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostList);

            /** GhostList ghosts. */
            public ghosts: wm5.protobuf.IGhostCar[];

            /**
             * Creates a new GhostList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostList instance
             */
            public static create(properties?: wm5.protobuf.IGhostList): wm5.protobuf.GhostList;

            /**
             * Encodes the specified GhostList message. Does not implicitly {@link wm5.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostList message, length delimited. Does not implicitly {@link wm5.protobuf.GhostList.verify|verify} messages.
             * @param message GhostList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostList;

            /**
             * Decodes a GhostList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostList;

            /**
             * Verifies a GhostList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostList
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostList;

            /**
             * Creates a plain object from a GhostList message. Also converts values to other types if specified.
             * @param message GhostList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CarSummary. */
        interface ICarSummary {

            /** CarSummary hitCount */
            hitCount: number;

            /** CarSummary cars */
            cars?: (wm5.protobuf.ICar[]|null);
        }

        /** Represents a CarSummary. */
        class CarSummary implements ICarSummary {

            /**
             * Constructs a new CarSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.ICarSummary);

            /** CarSummary hitCount. */
            public hitCount: number;

            /** CarSummary cars. */
            public cars: wm5.protobuf.ICar[];

            /**
             * Creates a new CarSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CarSummary instance
             */
            public static create(properties?: wm5.protobuf.ICarSummary): wm5.protobuf.CarSummary;

            /**
             * Encodes the specified CarSummary message. Does not implicitly {@link wm5.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CarSummary message, length delimited. Does not implicitly {@link wm5.protobuf.CarSummary.verify|verify} messages.
             * @param message CarSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.ICarSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CarSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.CarSummary;

            /**
             * Decodes a CarSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CarSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.CarSummary;

            /**
             * Verifies a CarSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CarSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CarSummary
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.CarSummary;

            /**
             * Creates a plain object from a CarSummary message. Also converts values to other types if specified.
             * @param message CarSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.CarSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CarSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CarSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GhostSummary. */
        interface IGhostSummary {

            /** GhostSummary ghosts */
            ghosts?: (wm5.protobuf.IGhostCar[]|null);
        }

        /** Represents a GhostSummary. */
        class GhostSummary implements IGhostSummary {

            /**
             * Constructs a new GhostSummary.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostSummary);

            /** GhostSummary ghosts. */
            public ghosts: wm5.protobuf.IGhostCar[];

            /**
             * Creates a new GhostSummary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostSummary instance
             */
            public static create(properties?: wm5.protobuf.IGhostSummary): wm5.protobuf.GhostSummary;

            /**
             * Encodes the specified GhostSummary message. Does not implicitly {@link wm5.protobuf.GhostSummary.verify|verify} messages.
             * @param message GhostSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostSummary message, length delimited. Does not implicitly {@link wm5.protobuf.GhostSummary.verify|verify} messages.
             * @param message GhostSummary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostSummary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostSummary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostSummary;

            /**
             * Decodes a GhostSummary message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostSummary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostSummary;

            /**
             * Verifies a GhostSummary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostSummary message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostSummary
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostSummary;

            /**
             * Creates a plain object from a GhostSummary message. Also converts values to other types if specified.
             * @param message GhostSummary
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostSummary to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostSummary
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileList. */
        interface IFileList {

            /** FileList files */
            files?: (wm5.protobuf.FileList.IFileInfo[]|null);

            /** FileList interval */
            interval?: (number|null);
        }

        /** Represents a FileList. */
        class FileList implements IFileList {

            /**
             * Constructs a new FileList.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IFileList);

            /** FileList files. */
            public files: wm5.protobuf.FileList.IFileInfo[];

            /** FileList interval. */
            public interval: number;

            /**
             * Creates a new FileList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileList instance
             */
            public static create(properties?: wm5.protobuf.IFileList): wm5.protobuf.FileList;

            /**
             * Encodes the specified FileList message. Does not implicitly {@link wm5.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileList message, length delimited. Does not implicitly {@link wm5.protobuf.FileList.verify|verify} messages.
             * @param message FileList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IFileList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.FileList;

            /**
             * Decodes a FileList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.FileList;

            /**
             * Verifies a FileList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileList
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.FileList;

            /**
             * Creates a plain object from a FileList message. Also converts values to other types if specified.
             * @param message FileList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.FileList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileList {

            /** Properties of a FileInfo. */
            interface IFileInfo {

                /** FileInfo fileId */
                fileId: number;

                /** FileInfo fileType */
                fileType: wm5.protobuf.FileType;

                /** FileInfo fileSize */
                fileSize: number;

                /** FileInfo url */
                url: string;

                /** FileInfo sha1sum */
                sha1sum: Uint8Array;

                /** FileInfo notBefore */
                notBefore: number;

                /** FileInfo notAfter */
                notAfter: number;
            }

            /** Represents a FileInfo. */
            class FileInfo implements IFileInfo {

                /**
                 * Constructs a new FileInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: wm5.protobuf.FileList.IFileInfo);

                /** FileInfo fileId. */
                public fileId: number;

                /** FileInfo fileType. */
                public fileType: wm5.protobuf.FileType;

                /** FileInfo fileSize. */
                public fileSize: number;

                /** FileInfo url. */
                public url: string;

                /** FileInfo sha1sum. */
                public sha1sum: Uint8Array;

                /** FileInfo notBefore. */
                public notBefore: number;

                /** FileInfo notAfter. */
                public notAfter: number;

                /**
                 * Creates a new FileInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FileInfo instance
                 */
                public static create(properties?: wm5.protobuf.FileList.IFileInfo): wm5.protobuf.FileList.FileInfo;

                /**
                 * Encodes the specified FileInfo message. Does not implicitly {@link wm5.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: wm5.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FileInfo message, length delimited. Does not implicitly {@link wm5.protobuf.FileList.FileInfo.verify|verify} messages.
                 * @param message FileInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: wm5.protobuf.FileList.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.FileList.FileInfo;

                /**
                 * Decodes a FileInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FileInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.FileList.FileInfo;

                /**
                 * Verifies a FileInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FileInfo
                 */
                public static fromObject(object: { [k: string]: any }): wm5.protobuf.FileList.FileInfo;

                /**
                 * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
                 * @param message FileInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: wm5.protobuf.FileList.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FileInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FileInfo
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GhostCompetitionTarget. */
        interface IGhostCompetitionTarget {

            /** GhostCompetitionTarget competitionId */
            competitionId: number;

            /** GhostCompetitionTarget specialGhostId */
            specialGhostId?: (number|null);

            /** GhostCompetitionTarget ghostCar */
            ghostCar: wm5.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId */
            trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt */
            updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule */
            competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);
        }

        /** Represents a GhostCompetitionTarget. */
        class GhostCompetitionTarget implements IGhostCompetitionTarget {

            /**
             * Constructs a new GhostCompetitionTarget.
             * @param [properties] Properties to set
             */
            constructor(properties?: wm5.protobuf.IGhostCompetitionTarget);

            /** GhostCompetitionTarget competitionId. */
            public competitionId: number;

            /** GhostCompetitionTarget specialGhostId. */
            public specialGhostId: number;

            /** GhostCompetitionTarget ghostCar. */
            public ghostCar: wm5.protobuf.IGhostCar;

            /** GhostCompetitionTarget trailId. */
            public trailId: (number|Long);

            /** GhostCompetitionTarget updatedAt. */
            public updatedAt: number;

            /** GhostCompetitionTarget competitionSchedule. */
            public competitionSchedule?: (wm5.protobuf.IGhostCompetitionSchedule|null);

            /**
             * Creates a new GhostCompetitionTarget instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GhostCompetitionTarget instance
             */
            public static create(properties?: wm5.protobuf.IGhostCompetitionTarget): wm5.protobuf.GhostCompetitionTarget;

            /**
             * Encodes the specified GhostCompetitionTarget message. Does not implicitly {@link wm5.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: wm5.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GhostCompetitionTarget message, length delimited. Does not implicitly {@link wm5.protobuf.GhostCompetitionTarget.verify|verify} messages.
             * @param message GhostCompetitionTarget message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: wm5.protobuf.IGhostCompetitionTarget, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): wm5.protobuf.GhostCompetitionTarget;

            /**
             * Decodes a GhostCompetitionTarget message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GhostCompetitionTarget
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): wm5.protobuf.GhostCompetitionTarget;

            /**
             * Verifies a GhostCompetitionTarget message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GhostCompetitionTarget message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GhostCompetitionTarget
             */
            public static fromObject(object: { [k: string]: any }): wm5.protobuf.GhostCompetitionTarget;

            /**
             * Creates a plain object from a GhostCompetitionTarget message. Also converts values to other types if specified.
             * @param message GhostCompetitionTarget
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: wm5.protobuf.GhostCompetitionTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GhostCompetitionTarget to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GhostCompetitionTarget
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** SystemConstant enum. */
        enum SystemConstant {
            PROTOBUF_MESSAGE_REVISION = 3225
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            ERR_SUCCESS = 0,
            ERR_REQUEST = 1,
            ERR_NOT_FOUND = 2,
            ERR_ID_SERVER = 3,
            ERR_ID_BANNED = 4,
            ERR_USER_LOCKED = 5,
            ERR_USER_VERSION = 6,
            ERR_NAME_CONFLICTED = 7,
            ERR_TEAM_LOCKED = 8,
            ERR_FORBIDDEN = 9,
            ERR_TEAM_DISSOLVED = 10,
            ERR_USER_SUCCEEDED = 11,
            ERR_BEING_TRANSFERRED = 12,
            ERR_SCRATCH_LOCKED = 13
        }

        /** LineType enum. */
        enum LineType {
            L_UNKNOWN = 0,
            L_MOBILE = 1,
            L_ISDN = 2,
            L_BFLETS = 3,
            L_ADSL = 4,
            L_WIRED = 5
        }

        /** TerminalType enum. */
        enum TerminalType {
            T_DRIVE = 0,
            T_TERMINAL = 1
        }

        /** DeviceType enum. */
        enum DeviceType {
            DEVICE_CARD = 0,
            DEVICE_PHONE = 1
        }

        /** WebsiteMembership enum. */
        enum WebsiteMembership {
            MEMBER_NON_MEMBER = 0,
            MEMBER_PREMIUM = 1,
            MEMBER_FREE = 2,
            MEMBER_PREMIUM_INACTIVE = 3,
            MEMBER_FREE_INACTIVE = 4
        }

        /** ItemCategory enum. */
        enum ItemCategory {
            CAT_CUSTOM_COLOR = 1,
            CAT_WHEEL = 2,
            CAT_AERO = 3,
            CAT_BONNET = 4,
            CAT_WING = 5,
            CAT_MIRROR = 6,
            CAT_STICKER = 7,
            CAT_NEON = 8,
            CAT_TRUNK = 9,
            CAT_NUMBER_PLATE = 10,
            CAT_SPECIAL_STICKER = 11,
            CAT_GT_WING = 12,
            CAT_MINI_STICKER = 13,
            CAT_AURA_MOTIF = 14,
            CAT_METER = 15,
            CAT_BGM = 16,
            CAT_NAME_PLATE = 17,
            CAT_NAME_FRAME = 18,
            CAT_NUMBER = 19,
            CAT_CHAR_EFFECT = 20,
            CAT_MOTION_EFFECT = 21,
            CAT_BGM_TRACK = 22,
            CAT_SIDE_STICKER = 23,
            CAT_ROOF_STICKER = 24,
            CAT_TEAM_DECORATION = 25,
            CAT_RIVAL_MARKER = 26,
            CAT_STAMP = 27,
            CAT_TERMINAL_BACKGROUND = 28,
            CAT_CAR_TICKET = 201
        }

        /** TutorialType enum. */
        enum TutorialType {
            TUTORIAL_STORY = 1,
            TUTORIAL_TIME_ATTACK = 2,
            TUTORIAL_GHOST = 4,
            TUTORIAL_GHOST_CHALLENGE = 8,
            TUTORIAL_GHOST_LEVEL = 16,
            TUTORIAL_UNUSED_1 = 32,
            TUTORIAL_GHOST_SEARCH = 64,
            TUTORIAL_GHOST_COMPETITION = 128,
            TUTORIAL_HP600_CARD = 256,
            TUTORIAL_UNUSED_2 = 512,
            TUTORIAL_COMPETITION_QUALIFIED = 1024,
            TUTORIAL_COMPETITION_TERMINAL = 2048,
            TUTORIAL_COMPETITION_NOTICE = 4096,
            TUTORIAL_COMPETITION_FINISHED = 8192,
            TUTORIAL_UNUSED_3 = 16384,
            TUTORIAL_BINGO_RULE = 32768,
            TUTORIAL_BINGO_NOTICE = 65536,
            TUTORIAL_UNUSED_4 = 131072,
            TUTORIAL_SHOP_FOR_DRIVE = 262144,
            TUTORIAL_SHOP_GRADE_GAUGE = 524288,
            TUTORIAL_GHOST_STAMP = 1048576,
            TUTORIAL_GHOST_STAMP_DECLINED = 2097152,
            TUTORIAL_GHOST_STAMP_FRIENDS = 4194304,
            TUTORIAL_TERMINAL_SCRATCH = 8388608,
            TUTORIAL_TURN_SCRATCH_SHEET = 16777216
        }

        /** CarCreationMethod enum. */
        enum CarCreationMethod {
            CAR_NEW = 0,
            CAR_TRANSFER = 1,
            CAR_HP600 = 2,
            CAR_PROMOTION = 3,
            CAR_CAMPAIGN = 4,
            CAR_COUPON = 5,
            CAR_TICKET = 6
        }

        /** CarCreationCoupon enum. */
        enum CarCreationCoupon {
            CAR_COUPON_NONE = 0,
            CAR_COUPON_HP600 = 1,
            CAR_COUPON_BMW_M3_BLACK = 2,
            CAR_COUPON_2000GT_BLACK = 3,
            CAR_COUPON_CAMARO_SS_RS_BLACK = 4,
            CAR_COUPON_CORVETTE_ZR1_TAXI = 5,
            CAR_COUPON_CAMARO_SS_RS_TAXI = 6,
            CAR_COUPON_SLK_350_PACE_CAR = 7,
            CAR_COUPON_BMW_Z4_PACE_CAR = 8,
            CAR_COUPON_HIACE_VAN_HIGH_LIFTED = 9,
            CAR_COUPON_BMW_M1 = 10,
            CAR_COUPON_BMW_M3_CSL = 11,
            CAR_COUPON_BENZ_SLS_AMG = 12,
            CAR_COUPON_BENZ_190E = 13,
            CAR_COUPON_SUBARU_LEVORG = 14,
            CAR_COUPON_AUDI_R8 = 15,
            CAR_COUPON_AUDI_RS4 = 16,
            CAR_COUPON_CHRYSLER_VIPER_SRT_10 = 17,
            CAR_COUPON_CHRYSLER_CHARGER_SRT_8 = 18,
            CAR_COUPON_BMW_MINI_COOPER_S_ALL4 = 19,
            CAR_COUPON_MAZDA_ROADSTER_ND = 20,
            CAR_COUPON_NISSAN_R35_NISMO = 21,
            CAR_COUPON_NISSAN_FAIRLADY_Z_NISMO = 22
        }

        /** GameMode enum. */
        enum GameMode {
            MODE_STORY = 1,
            MODE_TIME_ATTACK = 2,
            MODE_VS_BATTLE = 3,
            MODE_GHOST_BATTLE = 4,
            MODE_EVENT = 5
        }

        /** GhostType enum. */
        enum GhostType {
            GHOST_NORMAL = 1,
            GHOST_PINCH_RUNNER = 2,
            GHOST_DEFAULT = 3,
            GHOST_REGION = 4
        }

        /** GhostSelectionMethod enum. */
        enum GhostSelectionMethod {
            GHOST_CHALLENGE = 1,
            GHOST_SELECT_BY_LEVEL = 2,
            GHOST_SELECT_CROWN_MATCH = 3,
            GHOST_SELECT_STAMP_MATCH = 4,
            GHOST_SELECT_FROM_HISTORY = 5,
            GHOST_SEARCH_BY_SHOP = 6,
            GHOST_SEARCH_BY_NAME = 7,
            GHOST_ACCEPT_CHALLENGER = 8,
            GHOST_APPOINTMENT = 9,
            GHOST_DEFAULT_OPPONENT = 10,
            GHOST_COMPETITION = 11,
            GHOST_SPECIAL = 12
        }

        /** NoticeEntry enum. */
        enum NoticeEntry {
            NOTICE_TEAM_JOINED = 1,
            NOTICE_TEAM_DISSOLVED = 2,
            NOTICE_TEAM_LEADER_CHANGED = 3,
            NOTICE_TEAM_FORCEDLY_DISSOLVED = 4,
            NOTICE_TEAM_NOT_TRANSFERRED = 5,
            NOTICE_TEAM_TRANSFERRED = 6,
            NOTICE_TEAM_REJOIN_FINISHED = 7,
            NOTICE_TEAM_NAME_CHANGED = 8,
            NOTICE_TEAM_SUSPENDED = 9,
            NOTICE_WEBSITE_CANCELLED = 10,
            NOTICE_WEBSITE_EXPIRATION_EXPECTED = 11,
            NOTICE_WEBSITE_EXPIRED = 12
        }

        /** TeamNewsEntry enum. */
        enum TeamNewsEntry {
            NEWS_JOINED = 1,
            NEWS_LEADER_CHANGED = 2,
            NEWS_STICKER_CHANGED = 3
        }

        /** MaxiGoldIncomeType enum. */
        enum MaxiGoldIncomeType {
            INCOME_HP600_SENT = 1,
            INCOME_HP600_RECEIVED = 2,
            INCOME_GHOST_BATTLE = 3,
            INCOME_REPAYING_CAMPAIGN = 4,
            INCOME_WEBSITE = 5,
            INCOME_TRANSFERRED = 6
        }

        /** FileType enum. */
        enum FileType {
            FILE_PROMOTION_ANNOUNCEMENT = 1,
            FILE_SHOP_ANNOUNCEMENT = 2,
            FILE_WEBSITE_ANNOUNCEMENT = 3,
            FILE_FEATURE_ANNOUNCEMENT = 4,
            FILE_SCRATCH_DIRECTIONS = 5
        }

        /** CarCampaignUserState enum. */
        enum CarCampaignUserState {
            CAR_CAMPAIGN_NOT_ACCEPTED = 1,
            CAR_CAMPAIGN_ACCEPTED = 2,
            CAR_CAMPAIGN_FINISHED = 3
        }

        /** GhostCompetitionParticipantState enum. */
        enum GhostCompetitionParticipantState {
            COMPETITION_NOT_PARTICIPATED = 1,
            COMPETITION_QUALIFIED = 2,
            COMPETITION_PARTICIPATED = 3,
            COMPETITION_WON = 4
        }

        /** ShopState enum. */
        enum ShopState {
            SHOP_DISCOUNT_SALE = 1,
            SHOP_DISCOUNT_SALE_FINISHED = 2,
            SHOP_REPAYING_CAMPAIGN = 3,
            SHOP_REPAYING_CAMPAIGN_FINISHED = 4,
            SHOP_NEW_ARRIVALS = 5
        }

        /** ScreenshotType enum. */
        enum ScreenshotType {
            SS_GHOST_BATTLE = 1,
            SS_VERSUS_BATTLE = 2,
            SS_TERMINAL = 3
        }

        /** TransferState enum. */
        enum TransferState {
            NOT_REGISTERED = 0,
            NEW_REGISTRATION = 1,
            TRANSFER_REQUIRED = 2,
            TRANSFERRING = 3,
            TRANSFERRED = 4
        }

        /** BanacoinErrorCode enum. */
        enum BanacoinErrorCode {
            BC_SUCCESS = 0,
            BC_SHORTAGE = 1,
            BC_BNID_MEMBER_ERROR = 2,
            BC_UNKNOWN_ERROR = 3,
            BC_BNID_SYSTEM_ERROR = 4,
            BC_BNID_VERIFY_ERROR = 5,
            BC_BNID_EXECUTE_ERROR = 6,
            BC_BNID_SERVER_UNAVAILABLE = 99
        }

        /** EventModeSerialErrorCode enum. */
        enum EventModeSerialErrorCode {
            SERIAL_SUCCESS = 0,
            SERIAL_ATTEMPT_TO_CHANGE = 1,
            SERIAL_NO_INPUT = 2,
            SERIAL_INVALID = 3,
            SERIAL_EXPIRED = 4,
            SERIAL_OTHER_PLACE = 5
        }
    }
}
