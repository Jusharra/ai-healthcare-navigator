

## Update Case Studies Section

Currently the section shows only 4 case studies with a simplified format (challenge + bullet results). The update will expand to all 6 case studies with the full structure: Challenge, Solution, Results (with quotes where available), and Application/Impact sections.

### Changes

**File: `src/components/CaseStudiesSection.tsx`** - Complete rewrite of the studies data and card layout:

1. **Expand data array from 4 to 6 entries**, each containing:
   - Organization name and type
   - Challenge paragraph
   - Solution paragraph
   - Results (bullet list)
   - Client quote (where provided: cases 2, 3, 4)
   - Application/Impact section (where provided: cases 1, 5, 6)

2. **New case studies added:**
   - Case 3: Orthopedic Surgery Center (57% call abandonment reduction)
   - Case 6: Health Insurance Organization ($260M fraud savings)

3. **Updated card layout** to include:
   - Challenge section (already exists)
   - Solution section (new)
   - Results bullets (already exists)
   - Blockquote for client quotes when available
   - Application/Impact note when available

4. **Grid stays 2-column on desktop**, cards will be taller to accommodate the additional content.

5. **Icons updated** to match each case:
   - Case 1: TrendingUp (no-show reduction)
   - Case 2: PhoneCall (hold time reduction)
   - Case 3: Phone (call abandonment)
   - Case 4: CalendarCheck (schedule optimization)
   - Case 5: DollarSign (revenue recovery)
   - Case 6: Shield (fraud detection/governance)

