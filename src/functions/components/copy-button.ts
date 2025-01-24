import { Event, trackEvent } from "@/lib/events";

const copyToClipboardWithMeta = async (value: string, event?: Event) => {
  navigator.clipboard.writeText(value);

  if (event) {
    trackEvent(event);
  }
};

export { copyToClipboardWithMeta };
