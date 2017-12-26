// Type definitions for Sherlock
// Project: Sherlock
// Definitions by: Haryz Izzudin (pyrox18)

export function parse(str: string): SherlockEvent;
export function _setNow(newDate: Date): void;

export interface SherlockEvent {
  eventTitle: string | null;
  startDate: Date | null;
  endDate: Date | null;
  isAllDay: boolean;
}