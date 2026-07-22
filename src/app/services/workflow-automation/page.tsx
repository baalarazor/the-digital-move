import Link from "next/link";

export const metadata = {
  title: "Workflow Automation | The Digital Move",
  description: "Workflow automation services for approvals, CRM updates, email routing, and repeatable business processes.",
};

export default function WorkflowAutomationPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
      <Link href="/services" className="text-sm font-medium text-blue-600">← Back to services</Link>
      <div className="mt-6 space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Workflow Automation</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          We create automated workflows that connect tasks, approvals, emails, and systems so your team can move faster with fewer handoffs.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">What we provide</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>• Process mapping and automation design for business workflows</li>
            <li>• Approval routing for finance, legal, onboarding, and procurement</li>
            <li>• Automated CRM updates, email follow-up, and data synchronization</li>
            <li>• Monitoring, error handling, and process improvement support</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Who benefits</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            This service helps businesses that want to eliminate manual approvals, speed customer handoffs, reduce operational risk, and deliver predictable processes.
          </p>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">How we work</h2>
          <ol className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            <li>1. We document your current workflow and identify automation gaps.</li>
            <li>2. We design automation triggers, rules, and system connections.</li>
            <li>3. We implement the workflow in n8n, Make, or custom automation platforms.</li>
            <li>4. We validate results, hand over operation guides, and optimize continuously.</li>
          </ol>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-950">Workflow automation by industry</h2>
          <div className="mt-8 space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Healthcare</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Modern patient experiences and workflow resilience. We automate appointment reminders via SMS and email to reduce no-shows, streamline patient intake forms with digital pre-registration, automate insurance verification before visits, and coordinate clinical handoffs between departments. This reduces administrative overhead by 40–50%, improves patient satisfaction, and ensures no critical patient information falls through the cracks.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Restaurants</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Reservation and service automation that feels effortless. We route reservation requests to available staff, send automatic table readiness alerts to diners, automate follow-up emails thanking customers for their visit, and coordinate real-time kitchen workflow updates. This reduces manual call-handling, speeds up seating times, improves repeat bookings through targeted follow-ups, and keeps kitchen staff aligned on order priorities.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Law Firms</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Document-based workflows with AI support. We automate client intake processes, categorize incoming documents by case type, track critical deadlines automatically, trigger billing events based on milestone completions, and route approvals to partners for review. AI-powered document analysis identifies key clauses and flags potential compliance issues, reducing manual document review time by 60% and ensuring deadlines are never missed.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Real Estate</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Lead capture and follow-up automation. We route property inquiries directly to available agents, trigger virtual tour links automatically, schedule showing appointments without agent involvement, and send timely follow-ups to keep prospects engaged. Automated nurture sequences track prospect interest over time, prioritize hot leads, and move qualified buyers through closing faster, increasing conversion rates and reducing time-to-close by weeks.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Recruitment</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Resume analysis and candidate journey orchestration. We automate resume screening using AI to identify top candidates in seconds, send interview confirmations with meeting links, track candidate progress across interview stages, and notify hiring teams instantly when qualified matches appear. Automated status updates keep candidates informed, reducing radio silence complaints, while scoring systems ensure only relevant candidates reach hiring managers, saving 20+ hours per hire.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Accounting</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Faster reporting and client communication. We automate invoice workflows from creation to payment reminder, categorize expenses automatically, route approval chains to finance leads, and generate client reports on schedule. Automated reconciliation flags discrepancies before reports go out, reducing month-end close time by 30–40%, and scheduled digest emails keep clients informed without manual outreach.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Construction</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Operations visibility and approvals. We automate purchase order workflows, route site inspection sign-offs to foremen, send safety alerts to all crew members instantly, and generate daily progress reports automatically. Automated approval chains keep project moving without waiting for manager sign-off, real-time safety notifications prevent incidents, and visibility dashboards give leadership current project status without daily calls.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Education</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Student onboarding and internal systems. We automate enrollment workflows to process applications in hours, collect required documents with automated reminders, register students for courses based on prerequisites, and notify staff of new enrollments for preparation. Automated parent communication keeps families informed of important dates and milestones, reducing administrative burden on admissions staff by 50%, and ensuring no students slip through the cracks.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Logistics</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Shipment visibility and process coordination. We automate tracking updates sent to customers at each milestone, assign drivers based on route optimization, confirm deliveries and capture proof-of-delivery automatically, and alert support teams to delays in real time. Automated exception handling reroutes shipments or notifies customers early, reducing complaint volume by 40%, and customers always know exactly where their package is without calling support.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Retail</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Ecommerce support and customer journeys. We automate order processing, send inventory alerts to prevent overselling, notify customers of shipping and delivery milestones, and manage returns workflows end-to-end. Personalized follow-up campaigns remind customers of abandoned carts, recommend related products, and request reviews after delivery. This automation reduces cart abandonment by 15–20%, increases repeat purchase rates by 30%, and improves customer lifetime value.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Manufacturing</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Operational workflows and reporting. We automate production schedules, route quality check approvals to supervisors, send equipment maintenance alerts before failures occur, and generate operational dashboards updated in real time. Automated alerts prevent machinery downtime, quality checks happen systematically without manual oversight, and leadership always has current production metrics for decision-making without waiting for daily reports.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-lg font-semibold text-slate-950">Small Businesses</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">Simple steps to scale with confidence. We automate customer follow-ups after purchase, send invoice reminders automatically to reduce payment delays, onboard new employees with digital checklists, and route routine approvals without founder involvement. These automations give small teams the operational backbone of much larger companies, reducing manual work by 30–50%, freeing up time for revenue-generating activities, and enabling growth without proportional hiring.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
