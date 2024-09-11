"use client";

import { gql, useQuery } from "@apollo/client";
import { Address } from "~~/components/scaffold-eth";

const AdwumapaTable = () => {
  const ADWUMAPA_GRAPHQL = `
  {
    projects(first: 25, orderBy: startDate, orderDirection: desc) {
      id
      amount
      title
      description
      startDate
      endDate
      revisionPolicy
      milestones {
        id
        amount
        description
        isCompleted
      }
      client {
        address
      }
      freelancer {
        address
      }
    }
  }
  `;

  const ADWUMAPA_GQL = gql(ADWUMAPA_GRAPHQL);
  const { data: projectsData, error } = useQuery(ADWUMAPA_GQL, { fetchPolicy: "network-only" });

  // Subgraph maybe not yet configured
  if (error) {
    return <></>;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="overflow-x-auto shadow-2xl rounded-xl">
        <table className="table bg-base-100 table-zebra">
          <thead>
            <tr className="rounded-xl">
              <th className="bg-primary"></th>
              <th className="bg-primary">Client</th>
              <th className="bg-primary">Freelancer</th>
              <th className="bg-primary">Title</th>
              <th className="bg-primary">Description</th>
              <th className="bg-primary">Amount</th>
              <th className="bg-primary">Start Date</th>
              <th className="bg-primary">End Date</th>
              <th className="bg-primary">Revision Policy</th>
              <th className="bg-primary">Milestones</th>
            </tr>
          </thead>
          <tbody>
            {projectsData?.projects?.map((project: any, index: number) => {
              return (
                <tr key={project.id}>
                  <th>{index + 1}</th>
                  <td>
                    <Address address={project?.client?.address} />
                  </td>
                  <td>
                    <Address address={project?.freelancer?.address} />
                  </td>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td>{project.amount}</td>
                  <td>{new Date(project.startDate * 1000).toLocaleDateString()}</td>
                  <td>{new Date(project.endDate * 1000).toLocaleDateString()}</td>
                  <td>{project.revisionPolicy}</td>
                  <td>
                    {project.milestones.map((milestone: any) => (
                      <div key={milestone.id}>
                        {milestone.description} - {milestone.amount} - {milestone.isCompleted ? "Completed" : "Pending"}
                      </div>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdwumapaTable;
