import {
    Type as Timestamp
  } from "../proto/messages/google/protobuf/Timestamp";

/**
 * Creates and returns a Protocol Buffer Timestamp object based on the current time.
 * 
 * This function captures the current time and converts it to a Protocol Buffer
 * Timestamp object with seconds since epoch and nanoseconds precision.
 * 
 * @returns A Protocol Buffer Timestamp object representing the current time
 *          with seconds and nanoseconds components.
 */
export function timestamp(): Timestamp {
    const now = new Date();
    const seconds = Math.floor(now.getTime() / 1000);
    const nanos = now.getMilliseconds() * 1000000;
    return {
        seconds: seconds.toString(),
        nanos: nanos
    }
  }

/**
 * Returns the current time as an RFC 3339 formatted string suitable for
 * Protocol Buffer Timestamp JSON serialization.
 * 
 * Reference: https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp.html
 * 
 * The format is: "{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z"
 * - All components except year are zero-padded to two digits
 * - Year is expressed using four digits
 * - Fractional seconds can go up to 9 digits (nanosecond precision)
 * - The "Z" suffix indicates UTC timezone
 * 
 * @returns Current time in RFC 3339 format with UTC timezone (Z)
 */
export function timestampRfc3339(): string {
  const now = new Date();
  const isoString = now.toISOString();
  const formatted = isoString.replace(/\.\d{3}Z$/, (match) => {
    return match.slice(0, 4) + '000Z';
  });
  return formatted;
}