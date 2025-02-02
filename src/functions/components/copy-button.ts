import { Event, trackEvent } from "@/lib/events";

/**
 * Copies the provided text to the clipboard and optionally tracks an event if provided.
 * 
 * @param value - The text to be copied to the clipboard.
 * @param event - Optional event information to track. If provided, it is used to track the event.
 */
const copyToClipboardWithMeta = async (value: string, event?: Event) => {
  navigator.clipboard.writeText(value);

  if (event) {
    trackEvent(event);
  }
};

export { copyToClipboardWithMeta };
